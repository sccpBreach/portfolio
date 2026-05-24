import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const inMemoryCounts = new Map<string, { count: number; resetAt: number }>();

let upstashRatelimit: Ratelimit | null = null;

const REDIS_URL = process.env.UPSTASH_REDIS_REST_URL;
const REDIS_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN;

if (REDIS_URL && REDIS_TOKEN) {
  const redis = new Redis({ url: REDIS_URL, token: REDIS_TOKEN });
  upstashRatelimit = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(5, "60 s"),
    prefix: "portfolio-contact",
  });
}

export async function rateLimit(
  key: string,
  limit: number = 5,
  windowMs: number = 60_000
): Promise<{ allowed: boolean; remaining: number; resetIn: number }> {
  if (upstashRatelimit) {
    const result = await upstashRatelimit.limit(key);
    return {
      allowed: result.success,
      remaining: result.remaining,
      resetIn: Math.ceil((result.reset - Date.now()) / 1000) * 1000,
    };
  }

  const now = Date.now();
  const entry = inMemoryCounts.get(key);

  if (!entry || now > entry.resetAt) {
    inMemoryCounts.set(key, { count: 1, resetAt: now + windowMs });
    return { allowed: true, remaining: limit - 1, resetIn: windowMs };
  }

  if (entry.count >= limit) {
    return {
      allowed: false,
      remaining: 0,
      resetIn: entry.resetAt - now,
    };
  }

  entry.count++;
  return {
    allowed: true,
    remaining: limit - entry.count,
    resetIn: entry.resetAt - now,
  };
}
