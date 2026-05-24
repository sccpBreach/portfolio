import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/contact-schema";
import { rateLimit } from "@/lib/rate-limit";

const MAX_PAYLOAD_SIZE = 10_000;
const ALLOWED_ORIGINS = [
  "https://sccpbreachfolio.com",
  "https://www.sccpbreachfolio.com",
  "http://localhost:3000",
];

function getClientIp(req: NextRequest): string {
  return (
    req.headers.get("x-real-ip") ??
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    "anonymous"
  );
}

function isValidOrigin(req: NextRequest): boolean {
  const origin = req.headers.get("origin");
  const referer = req.headers.get("referer");

  if (!origin && !referer) return false;

  const check = (url: string | null) => {
    if (!url) return false;
    try {
      const parsed = new URL(url);
      return ALLOWED_ORIGINS.includes(parsed.origin);
    } catch {
      return false;
    }
  };

  return check(origin) || check(referer);
}

export async function POST(req: NextRequest) {
  try {
    if (!isValidOrigin(req)) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const ip = getClientIp(req);

    const { allowed, remaining, resetIn } = await rateLimit(ip, 5, 60_000);

    if (!allowed) {
      return NextResponse.json(
        {
          error: "Terlalu banyak permintaan. Coba lagi dalam beberapa saat.",
        },
        {
          status: 429,
          headers: {
            "Retry-After": String(Math.ceil(resetIn / 1000)),
            "X-RateLimit-Remaining": "0",
            "X-RateLimit-Reset": String(Math.ceil(resetIn / 1000)),
          },
        }
      );
    }

    const contentLength = parseInt(
      req.headers.get("content-length") ?? "0",
      10
    );
    if (contentLength > MAX_PAYLOAD_SIZE) {
      return NextResponse.json(
        { error: "Payload terlalu besar" },
        { status: 413 }
      );
    }

    const rawBody = await req.text();
    if (rawBody.length > MAX_PAYLOAD_SIZE) {
      return NextResponse.json(
        { error: "Payload terlalu besar" },
        { status: 413 }
      );
    }

    let body: unknown;
    try {
      body = JSON.parse(rawBody);
    } catch {
      return NextResponse.json(
        { error: "Format JSON tidak valid" },
        { status: 400 }
      );
    }

    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      const firstError = parsed.error.issues[0]?.message ?? "Data tidak valid";
      return NextResponse.json({ error: firstError }, { status: 400 });
    }

    const { name, email, message } = parsed.data;

    const resendApiKey = process.env.RESEND_API_KEY;

    if (resendApiKey) {
      const resend = new Resend(resendApiKey);

      await resend.emails.send({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: "sccpbreach@gmail.com",
        subject: `Pesan baru dari ${name}`,
        text: `Nama: ${name}\nEmail: ${email}\nPesan: ${message}`,
      });
    } else {
      console.log("=== PESAN BARU ===");
      console.log("Nama:", name);
      console.log("Email:", email);
      console.log("Pesan:", message);
      console.log("==================");
    }

    return NextResponse.json(
      {
        success: true,
        message: "Pesan berhasil dikirim!",
      },
      {
        headers: {
          "X-RateLimit-Remaining": String(remaining),
        },
      }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan server" },
      { status: 500 }
    );
  }
}
