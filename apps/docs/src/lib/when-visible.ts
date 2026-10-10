/**
 * Run `callback` once when `element` intersects the viewport (with rootMargin).
 * Falls back to immediate callback when IntersectionObserver is unavailable.
 *
 * Already-near-viewport elements invoke `callback` synchronously so React
 * Strict Mode remounts (observe → disconnect → observe) still mount above-fold
 * previews — IO's initial delivery is async-only and is easy to miss.
 */
export function whenVisible(
  element: Element,
  callback: () => void,
  options?: IntersectionObserverInit,
): () => void {
  const rootMarginPx = parseRootMarginY(options?.rootMargin) ?? 240;

  if (
    typeof IntersectionObserver === "undefined" ||
    isNearViewport(element, rootMarginPx)
  ) {
    callback();
    return () => {};
  }

  let done = false;
  const run = () => {
    if (done) return;
    done = true;
    observer.disconnect();
    callback();
  };

  const observer = new IntersectionObserver(
    (entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return;
      run();
    },
    { rootMargin: "240px 0px", threshold: 0, ...options },
  );
  observer.observe(element);

  return () => {
    done = true;
    observer.disconnect();
  };
}

function isNearViewport(element: Element, marginPx: number): boolean {
  const rect = element.getBoundingClientRect();
  const vh = window.innerHeight || document.documentElement.clientHeight || 0;
  return rect.top < vh + marginPx && rect.bottom > -marginPx;
}

/** Parse the vertical rootMargin used for the eager near-viewport check. */
function parseRootMarginY(rootMargin: string | undefined): number | undefined {
  if (!rootMargin) return undefined;
  const first = rootMargin.trim().split(/\s+/)[0];
  if (!first?.endsWith("px")) return undefined;
  const n = Number.parseFloat(first);
  return Number.isFinite(n) ? Math.abs(n) : undefined;
}
