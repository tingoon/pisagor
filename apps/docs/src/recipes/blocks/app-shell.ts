import { tv } from "tailwind-variants";

export const standardAppShellBlock = tv({
  slots: {
    brand: "font-semibold text-base tracking-tight",
    inspectorBody: "text-muted-foreground text-sm",
    navActions: "flex items-center gap-2",
    navRow: "flex w-full items-center gap-2",
    panelItem: "justify-start rounded-xl",
    panelNav: "flex flex-col gap-0.5 p-1",
    placeholder: "flex max-w-prose flex-col gap-4",
    placeholderAction: "w-fit",
    placeholderCopy: "flex flex-col gap-1.5",
    placeholderHeading: "font-semibold text-xl leading-tight tracking-tight",
    placeholderText: "text-muted-foreground text-sm leading-relaxed",
    primaryNav: "flex flex-1 items-center gap-1",
    railTitle: "px-1 font-semibold text-sm tracking-tight",
    root: "min-h-svh",
    srOnly: "sr-only",
    title: "font-semibold text-sm tracking-tight",
  },
});
