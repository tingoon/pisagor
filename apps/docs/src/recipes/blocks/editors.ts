import { tv } from "tailwind-variants";

export const editableUserCardBlock = tv({
  slots: {
    narrow: "w-full max-w-sm",
    root: "w-full",
  },
});

export const ideLayoutBlock = tv({
  slots: {
    content: "p-2 text-muted-foreground text-sm",
    frame: "h-64",
    pane: "flex flex-1 flex-col rounded-lg border p-0.5",
    root: "flex size-full gap-2",
    sidebar: "rounded-lg border p-2",
    tabLabel: "flex items-center gap-2",
    tabs: "flex-1",
  },
});

export const richTextToolbarBlock = tv({
  slots: {
    root: "flex items-center gap-2",
  },
});
