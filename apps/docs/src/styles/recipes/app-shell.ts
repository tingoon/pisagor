import { tv } from "tailwind-variants";

export const standardAppShellBlock = tv({
  slots: {
    brand: "text-base font-semibold tracking-tight",
    inspectorBody: "text-muted-foreground text-sm",
    navActions: "flex items-center gap-2",
    navRow: "flex w-full items-center gap-2",
    panelItem: "justify-start rounded-xl",
    panelNav: "flex flex-col gap-0.5 p-1",
    placeholder: "flex max-w-prose flex-col gap-4",
    placeholderAction: "w-fit",
    placeholderCopy: "flex flex-col gap-1.5",
    placeholderHeading: "text-xl leading-tight font-semibold tracking-tight",
    placeholderText: "text-muted-foreground text-sm leading-relaxed",
    primaryNav: "flex flex-1 items-center gap-1",
    railTitle: "px-1 text-sm font-semibold tracking-tight",
    root: "min-h-svh",
    srOnly: "sr-only",
    title: "text-sm font-semibold tracking-tight",
  },
});
