import { Fragment } from "react";
import preview from "#/storybook/preview";
import { AvatarGroupOverflow as AvatarGroupOverflowRecipe } from "./avatar-group-overflow";
import { ItemPicker as ItemPickerRecipe } from "./item-picker";
import { MenuDialog as MenuDialogRecipe } from "./menu-dialog";
import { PopoverDialog as PopoverDialogRecipe } from "./popover-dialog";

const meta = preview.meta({
  component: Fragment,
  parameters: {
    docs: {
      description: {
        component:
          "Overlay compositions for menus, dialogs, popovers, item pickers, and avatar overflow.",
      },
    },
  },
  title: "Recipes/Overlay",
});

export const MenuDialog = meta.story({
  render: () => <MenuDialogRecipe />,
});

export const PopoverDialog = meta.story({
  render: () => <PopoverDialogRecipe />,
});

export const ItemPicker = meta.story({
  render: () => <ItemPickerRecipe />,
});

export const AvatarGroupOverflow = meta.story({
  render: () => <AvatarGroupOverflowRecipe />,
});
