import KbdRoot from "./kbd.svelte";
import KbdGroup from "./kbd-group.svelte";

export const Kbd = Object.assign(KbdRoot, {
  Group: KbdGroup,
});
