import AvatarGroupOverflow from "./avatar-group-overflow.svelte?raw";
import ItemPicker from "./item-picker.svelte?raw";
import MenuDialog from "./menu-dialog.svelte?raw";
import PopoverDialog from "./popover-dialog.svelte?raw";

export const imports = `import { … } from "@pisagor/svelte";`;

export const sources = {
  AvatarGroupOverflow,
  ItemPicker,
  MenuDialog,
  PopoverDialog,
} as const;
