import { tv } from "tailwind-variants";

export const formGridBlock = tv({
  slots: {
    group: "grid grid-cols-2",
    span: "col-span-2",
  },
});

export const formSectionBlock = tv({
  slots: {
    root: "w-full max-w-md",
  },
});

export const labelAccessoryBlock = tv({
  slots: {
    badge: "ml-auto",
    label: "flex items-center gap-2",
  },
});

export const settingsPanelBlock = tv({
  slots: {
    root: "flex w-full max-w-md flex-col gap-1",
  },
});

export const settingsRowBlock = tv({
  slots: {
    root: "w-full max-w-md",
  },
});
