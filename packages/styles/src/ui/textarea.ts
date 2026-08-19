import { tv } from "tailwind-variants";

export const textareaVariants = tv({
  slots: {
    clearableRoot: [
      "field-sizing-content min-h-16 w-full flex-1",
      "px-3 py-2",
      "bg-transparent",
      "text-base md:text-sm",
      "resize-none rounded-none border-0 shadow-none",
      "placeholder:text-muted-foreground/64",
      "transition-[color,box-shadow]",
      "outline-hidden focus-visible:ring-0",
      "disabled:bg-transparent aria-invalid:ring-0 data-invalid:ring-0",
      "dark:bg-transparent dark:disabled:bg-transparent",
      "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-64",
      "motion-reduce:transition-none!",
    ],
    group: ["relative", "h-auto", "items-start"],
    rootLayout: ["field-sizing-content min-h-16 w-full", "flex h-auto px-3 py-2"],
  },
});

export const textareaInlineVariants = tv({
  base: ["absolute top-1.5 right-1.5 self-start p-0"],
});
