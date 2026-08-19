/**
 * Storybook's test preview replaces `HTMLElement.prototype.focus` with a getter
 * that reads `this.ownerDocument`. Zag's `@zag-js/focus-visible` reads
 * `HTMLElement.prototype.focus` (this === the prototype), which throws:
 * "The Node.ownerDocument getter can only be used on instances of Node".
 *
 * Keep focus settable (Storybook / Zag both assign via defineProperty or setter)
 * while making prototype reads safe.
 */
export function reconcileFocusPrototype(): void {
  if (typeof HTMLElement === "undefined" || typeof document === "undefined") {
    return;
  }

  const descriptor = Object.getOwnPropertyDescriptor(HTMLElement.prototype, "focus");
  if (!descriptor?.get || !descriptor.configurable) {
    return;
  }

  let currentFocus: HTMLElement["focus"];
  try {
    currentFocus = descriptor.get.call(document.createElement("button"));
  } catch {
    return;
  }

  if (typeof currentFocus !== "function") {
    return;
  }

  Object.defineProperty(HTMLElement.prototype, "focus", {
    configurable: true,
    get() {
      return currentFocus;
    },
    set(next: HTMLElement["focus"]) {
      currentFocus = next;
    },
  });
}
