// Signed-cookie session for the single-owner admin area. Uses Web Crypto
// (available in both the Node and Edge runtimes) so this works from
// middleware without pulling in a new dependency.

export const ADMIN_COOKIE_NAME = "admin_session";
export const ADMIN_SESSION_MAX_AGE_SECONDS = 60 * 60 * 24 * 30; // 30 days

async function getKey(secret: string) {
  return crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
}

function toHex(buffer: ArrayBuffer): string {
  return Array.from(new Uint8Array(buffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return result === 0;
}

export async function createAdminSessionToken(): Promise<string> {
  const secret = process.env.ADMIN_SESSION_SECRET!;
  const expires = Date.now() + ADMIN_SESSION_MAX_AGE_SECONDS * 1000;
  const payload = String(expires);
  const key = await getKey(secret);
  const signature = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(payload));
  return `${payload}.${toHex(signature)}`;
}

export async function isValidAdminSessionToken(token: string | undefined): Promise<boolean> {
  if (!token) return false;

  const [payload, signatureHex] = token.split(".");
  if (!payload || !signatureHex) return false;

  const expires = Number(payload);
  if (!Number.isFinite(expires) || Date.now() > expires) return false;

  const secret = process.env.ADMIN_SESSION_SECRET!;
  const key = await getKey(secret);
  const expectedSignature = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(payload));

  return timingSafeEqual(signatureHex, toHex(expectedSignature));
}
