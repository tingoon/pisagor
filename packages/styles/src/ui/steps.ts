import { tv, type VariantProps } from "tailwind-variants";

export const stepsVariants = tv({
  base: [
    "flex flex-col gap-4",
    "data-[orientation=vertical]:min-h-32 data-[orientation=vertical]:flex-row data-[orientation=vertical]:gap-8",
  ],
});

export const stepsListVariants = tv({
  base: [
    "[--steps-gutter:--spacing(2)] [--steps-icon-size:--spacing(4)] [--steps-size:--spacing(8)]",
    "flex",
    "data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start",
    "data-[orientation=horizontal]:items-center data-[orientation=horizontal]:justify-between",
  ],
});

export const stepsItemVariants = tv({
  base: [
    "group/step",
    "relative flex flex-1",
    "data-[orientation=vertical]:items-start",
    "data-[orientation=horizontal]:items-center",
    "last:flex-initial last:**:data-[scope=steps]:data-[part=separator]:hidden",
  ],
});

export const stepsTriggerVariants = tv({
  base: [
    "inline-flex items-center gap-3",
    "cursor-pointer rounded-full outline-hidden",
    "disabled:pointer-events-none disabled:opacity-64",
  ],
});

export const stepsIndicatorVariants = tv({
  slots: {
    base: [
      "flex shrink-0 items-center justify-center tabular-nums",
      "size-(--steps-size)",
      "bg-muted text-muted-foreground",
      "font-medium text-sm",
      "rounded-full border",
      "transition-colors",
      "in-focus-visible:ring-[3px] in-focus-visible:ring-ring/32",
      "data-current:border-primary data-current:bg-primary data-current:text-primary-foreground",
      "data-complete:border-primary data-complete:bg-primary data-complete:text-primary-foreground",
      "[&_svg]:size-(--steps-icon-size) [&_svg]:shrink-0",
      "motion-reduce:transition-none!",
    ],
    check: ["hidden group-data-complete/step:block"],
    label: "group-data-complete/step:hidden",
  },
});

export const stepsSeparatorVariants = tv({
  base: [
    "flex-1",
    "bg-border",
    "rounded-full",
    "transition-colors",
    "data-complete:bg-primary",
    "data-[orientation=horizontal]:mx-(--steps-gutter) data-[orientation=horizontal]:h-0.5 data-[orientation=horizontal]:w-full",
    "data-[orientation=vertical]:absolute data-[orientation=vertical]:top-[calc(var(--steps-size)+var(--steps-gutter))] data-[orientation=vertical]:left-[calc(var(--steps-size)/2-1px)] data-[orientation=vertical]:h-full data-[orientation=vertical]:max-h-[calc(100%-(var(--steps-size)+var(--steps-gutter)*2))] data-[orientation=vertical]:w-0.5",
    "motion-reduce:transition-none!",
  ],
});

export const stepsTitleVariants = tv({
  base: ["font-medium text-sm leading-none"],
});

export const stepsDescriptionVariants = tv({
  base: ["text-muted-foreground text-xs"],
});

export const stepsContentVariants = tv({
  base: "data-[orientation=vertical]:flex-1",
});

export const stepsCompletedContentVariants = tv({
  base: "data-[orientation=vertical]:flex-1",
});
export type StepsVariantProps = VariantProps<typeof stepsVariants>;
export type StepsListVariantProps = VariantProps<typeof stepsListVariants>;
export type StepsItemVariantProps = VariantProps<typeof stepsItemVariants>;
export type StepsTriggerVariantProps = VariantProps<typeof stepsTriggerVariants>;
export type StepsIndicatorVariantProps = VariantProps<typeof stepsIndicatorVariants>;
export type StepsSeparatorVariantProps = VariantProps<typeof stepsSeparatorVariants>;
export type StepsTitleVariantProps = VariantProps<typeof stepsTitleVariants>;
export type StepsDescriptionVariantProps = VariantProps<typeof stepsDescriptionVariants>;
export type StepsContentVariantProps = VariantProps<typeof stepsContentVariants>;
export type StepsCompletedContentVariantProps = VariantProps<typeof stepsCompletedContentVariants>;
