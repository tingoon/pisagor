const FOCUSABLE =
  'button:not(:disabled), a[href], [tabindex]:not([tabindex="-1"])';

/**
 * Moves focus between the focusable children of `event.currentTarget` with
 * arrow, Home and End keys (RTL aware). Used by toolbar action groups.
 */
export function handleRovingFocusKeyDown(event: KeyboardEvent): void {
  const container = event.currentTarget as HTMLElement | null;
  if (!container) {
    return;
  }
  const items = Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE));
  const index = items.indexOf(document.activeElement as HTMLElement);
  if (index === -1) {
    return;
  }
  const rtl = getComputedStyle(container).direction === "rtl";
  const next = rtl ? "ArrowLeft" : "ArrowRight";
  const prev = rtl ? "ArrowRight" : "ArrowLeft";
  const target =
    event.key === next
      ? items[(index + 1) % items.length]
      : event.key === prev
        ? items[(index - 1 + items.length) % items.length]
        : event.key === "Home"
          ? items[0]
          : event.key === "End"
            ? items.at(-1)
            : undefined;
  if (!target) {
    return;
  }
  event.preventDefault();
  target.focus();
}
