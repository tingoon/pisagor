import { tv } from "tailwind-variants";

export const avatarGroupOverflowBlock = tv({
  slots: {
    root: "flex flex-wrap items-center gap-2",
    row: "flex items-center gap-2",
  },
});

export const itemPickerBlock = tv({
  slots: {
    avatar: "grayscale",
    content: "w-72 p-1.5",
    email: "text-muted-foreground truncate text-sm",
    item: "[--space:--spacing(2)]",
    meta: "min-w-0",
    name: "truncate font-medium",
    row: "flex items-center gap-2 [--space:--spacing(2)]",
  },
});

export const menuDialogBlock = tv({
  slots: {
    description: "text-muted-foreground text-sm leading-relaxed",
  },
});
