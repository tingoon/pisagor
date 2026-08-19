import { tv } from "tailwind-variants";

export const treeViewControlVariants = tv({
  base: [
    "peer",
    "relative my-px",
    "flex items-center gap-(--item-gap)",
    "min-h-8 w-full",
    "py-(--padding-block) ps-[calc(var(--padding-inline)+var(--indentation)*(var(--depth)-1)+var(--icon-size)*(var(--depth)-1)*0.5)] pe-(--padding-inline)",
    "bg-transparent",
    "select-none text-start font-inherit text-muted-foreground",
    "rounded-md border-none",
    "cursor-pointer",
    "hover:bg-muted hover:text-foreground",
    "outline-hidden focus-visible:outline-2 focus-visible:outline-ring focus-visible:-outline-offset-2",
    "data-selected:bg-accent data-selected:text-accent-foreground",
    "data-focus:bg-muted data-focus:text-foreground",
    "data-disabled:opacity-64 data-disabled:grayscale",
    "[&_svg]:size-4 [&_svg]:shrink-0",
  ],
});

export const treeViewVariants = tv({
  base: [
    "[--indentation:--spacing(4)] [--item-gap:--spacing(2)]",
    "[--padding-block:--spacing(1.5)] [--padding-inline:--spacing(3)]",
    "[--icon-size:--spacing(4)]",
    "w-full",
    "flex flex-col gap-2",
    "text-foreground",
  ],
});

export const treeViewLabelVariants = tv({
  base: ["select-none font-medium text-foreground text-sm"],
});

export const treeViewTreeVariants = tv({
  base: ["flex flex-col text-sm", "[&_svg]:size-(--icon-size) [&_svg]:shrink-0"],
});

export const treeViewBranchVariants = tv({
  base: "relative",
});

export const treeViewBranchTitleVariants = tv({
  base: [
    "flex flex-1 items-center gap-(--item-gap)",
    "overflow-hidden text-ellipsis whitespace-nowrap",
  ],
});

export const treeViewBranchIndicatorVariants = tv({
  base: [
    "inline-flex shrink-0 items-center justify-center",
    "text-muted-foreground",
    "origin-center transition-transform duration-150",
    "data-[state=open]:rotate-90",
    "[&_svg]:size-3.5 [&_svg]:shrink-0",
    "motion-reduce:transition-none!",
  ],
});

export const treeViewBranchContentVariants = tv({
  base: [
    "relative overflow-hidden",
    "data-[state=open]:animate-[expand_150ms_ease-out]",
    "data-[state=closed]:animate-[collapse_150ms_ease-out]",
    "motion-reduce:animate-none!",
  ],
});

export const treeViewBranchIndentGuideVariants = tv({
  base: [
    "absolute z-1",
    "h-full w-px",
    "bg-border",
    "inset-s-[calc(var(--padding-inline)+var(--indentation)*(var(--depth)-1)+var(--icon-size)*0.5*var(--depth))]",
    "pointer-events-none",
  ],
});

export const treeViewItemIconVariants = tv({
  base: "in-[[data-scope=tree-view][data-part=item]:has([data-scope=tree-view][data-part=node-checkbox])]:hidden",
});

export const treeViewItemTitleVariants = tv({
  base: [
    "flex flex-1 items-center gap-(--item-gap)",
    "text-ellipsis whitespace-nowrap",
    "overflow-hidden",
  ],
});

export const treeViewCheckboxVariants = tv({
  base: "[&_svg]:size-3!",
});

export const treeViewNodeRenameInputVariants = tv({
  base: [
    "h-full min-w-0",
    "flex-1",
    "-my-px px-2 py-0",
    "text-sm",
    "border-primary bg-popover text-foreground",
    "rounded-md border",
    "selection:bg-primary/20 selection:text-foreground",
    "outline-hidden focus-visible:border-primary focus-visible:ring-[3px] focus-visible:ring-ring/32",
  ],
});
