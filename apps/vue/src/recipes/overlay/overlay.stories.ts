import preview from "#/storybook/preview";
import { AvatarGroupOverflow } from "./avatar-group-overflow";
import { ItemPicker } from "./item-picker";
import { MenuDialog } from "./menu-dialog";
import { PopoverDialog } from "./popover-dialog";

const meta = preview.meta({
  component: MenuDialog,
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

export const MenuDialogStory = meta.story({
  render: () => ({
    components: { MenuDialog },
    template: `<MenuDialog />`,
  }),
});

export const PopoverDialogStory = meta.story({
  render: () => ({
    components: { PopoverDialog },
    template: `<PopoverDialog />`,
  }),
});

export const ItemPickerStory = meta.story({
  render: () => ({
    components: { ItemPicker },
    template: `<ItemPicker />`,
  }),
});

export const AvatarGroupOverflowStory = meta.story({
  render: () => ({
    components: { AvatarGroupOverflow },
    template: `<AvatarGroupOverflow />`,
  }),
});
