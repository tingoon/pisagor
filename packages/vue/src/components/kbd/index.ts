import { KbdGroup, KbdRoot } from "./kbd";

export type { KbdProps } from "./kbd";

export const Kbd = Object.assign(KbdRoot, {
  Group: KbdGroup,
});
