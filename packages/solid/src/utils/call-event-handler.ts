/**
 * Invoke a Solid event-handler prop (function or bound tuple) without fighting
 * ChangeEventHandler vs EventHandler target typing differences.
 */
export function callEventHandler(handler: unknown, event: Event): void {
  if (typeof handler === "function") {
    (handler as (event: Event) => void)(event);
    return;
  }
  if (Array.isArray(handler) && typeof handler[0] === "function") {
    (handler[0] as (data: unknown, event: Event) => void)(handler[1], event);
  }
}
