import { tv } from "tailwind-variants";

export const dataGridColumnResizerVariants = tv({
  base: [
    "absolute inset-e-0 top-0 z-10 h-full w-1 cursor-col-resize touch-none select-none",
    "bg-transparent hover:bg-primary/40",
  ],
});

export const dataGridToolbarVariants = tv({
  base: ["flex flex-col gap-3"],
});

export const dataGridFooterVariants = tv({
  base: ["flex flex-col gap-3"],
});

export const dataGridVariants = tv({
  base: ["flex w-full flex-col gap-3"],
});

export const dataGridInlineVariants = tv({
  base: "hidden",
});

export const dataGridInline2Variants = tv({
  base: "hidden",
});

export const dataGridInline3Variants = tv({
  base: ["py-6 text-center text-muted-foreground"],
});

export const dataGridFilterHeadVariants = tv({
  base: [
    "h-auto min-h-10 align-top py-2 whitespace-normal",
    "**:data-[scope=select]:data-[part=control]:w-full",
    "**:data-[scope=select]:data-[part=trigger]:h-7 **:data-[scope=select]:data-[part=trigger]:w-full **:data-[scope=select]:data-[part=trigger]:max-w-none",
  ],
});
