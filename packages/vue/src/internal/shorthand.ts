import type { PropType, Slot, VNodeChild } from "vue";

/** Render function for one piece of shorthand content. */
export type ShorthandContent = () => VNodeChild;

/**
 * Runtime prop declaration for shorthand content props (`title`, `description`,
 * `actions`, …) that accept text or render output.
 */
export const contentProp = {
  default: undefined,
  type: [String, Number, Object, Array] as PropType<VNodeChild>,
};

/**
 * Resolves shorthand content: a named slot wins, then the matching prop.
 * Returns `undefined` when neither is set so callers can skip the part.
 */
export function slotOrProp(
  slot: Slot | undefined,
  value: VNodeChild | undefined,
): ShorthandContent | undefined {
  if (slot) return slot;

  if (value === undefined || value === null) return undefined;

  return () => value;
}
