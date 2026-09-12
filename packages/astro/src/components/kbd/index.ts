import KbdRoot from "./kbd.astro";
import KbdGroup from "./kbd-group.astro";

export const Kbd = Object.assign(KbdRoot, {
  Group: KbdGroup,
});
