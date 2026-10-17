import { AvatarGroupOverflowSource as AvatarGroupOverflow } from "./avatar-group-overflow";
import { ItemPickerSource as ItemPicker } from "./item-picker";
import { MenuDialogSource as MenuDialog } from "./menu-dialog";
import { PopoverDialogSource as PopoverDialog } from "./popover-dialog";

export const imports = `import { … } from "@pisagor/react";`;

export const sources = {
  AvatarGroupOverflow,
  ItemPicker,
  MenuDialog,
  PopoverDialog,
} as const;
