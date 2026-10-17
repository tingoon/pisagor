import Autocomplete from "./autocomplete.svelte?raw";
import AutoHide from "./auto-hide.svelte?raw";
import Compound from "./compound.svelte?raw";
import Controlled from "./controlled.svelte?raw";
import ControlledVisibility from "./controlled-visibility.svelte?raw";
import Default from "./default.svelte?raw";
import Disabled from "./disabled.svelte?raw";
import Invalid from "./invalid.svelte?raw";
import Sizes from "./sizes.svelte?raw";

export const imports = `import { PasswordInput } from "@pisagor/svelte";`;

export const sources = {
  Autocomplete,
  AutoHide,
  Compound,
  Controlled,
  ControlledVisibility,
  Default,
  Disabled,
  Invalid,
  Sizes,
} as const;
