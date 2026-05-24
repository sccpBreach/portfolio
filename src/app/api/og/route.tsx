import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
          fontFamily: "Inter, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 120,
            height: 120,
            borderRadius: 60,
            background: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
            marginBottom: 24,
          }}
        >
          <span style={{ fontSize: 56, fontWeight: 700, color: "white" }}>F</span>
        </div>
        <h1
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: "#f1f5f9",
            margin: 0,
            letterSpacing: -1,
          }}
        >
          Fauzan
        </h1>
        <p
          style={{
            fontSize: 28,
            color: "#94a3b8",
            margin: "8px 0 0",
          }}
        >
          AI Orchestrator
        </p>
        <div
          style={{
            marginTop: 24,
            display: "flex",
            gap: 8,
            alignItems: "center",
          }}
        >
          <span
            style={{
              padding: "6px 16px",
              borderRadius: 20,
              background: "rgba(59, 130, 246, 0.15)",
              color: "#60a5fa",
              fontSize: 16,
            }}
          >
            Next.js
          </span>
          <span
            style={{
              padding: "6px 16px",
              borderRadius: 20,
              background: "rgba(59, 130, 246, 0.15)",
              color: "#60a5fa",
              fontSize: 16,
            }}
          >
            TypeScript
          </span>
          <span
            style={{
              padding: "6px 16px",
              borderRadius: 20,
              background: "rgba(59, 130, 246, 0.15)",
              color: "#60a5fa",
              fontSize: 16,
            }}
          >
            Tailwind CSS
          </span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
