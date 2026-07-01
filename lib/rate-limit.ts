/**
 * Rate limiting simple par fenêtre fixe, en mémoire.
 * Note : la mémoire n'est pas partagée entre instances serverless — la limite
 * s'applique donc par instance. Suffisant comme garde-fou anti-abus basique ;
 * pour une limite stricte à l'échelle, utiliser un store durable (ex. Upstash Redis).
 */
type Bucket = { count: number; reset: number };

const buckets = new Map<string, Bucket>();

export function rateLimit(
  key: string,
  limit: number,
  windowMs: number,
  now: number = Date.now(),
): { ok: boolean; retryAfter: number } {
  const bucket = buckets.get(key);

  if (!bucket || now >= bucket.reset) {
    buckets.set(key, { count: 1, reset: now + windowMs });
    // Purge opportuniste des entrées expirées si la map grossit.
    if (buckets.size > 5000) {
      for (const [k, b] of buckets) if (now >= b.reset) buckets.delete(k);
    }
    return { ok: true, retryAfter: 0 };
  }

  if (bucket.count >= limit) {
    return { ok: false, retryAfter: Math.max(1, Math.ceil((bucket.reset - now) / 1000)) };
  }

  bucket.count += 1;
  return { ok: true, retryAfter: 0 };
}
