import { tv, type VariantProps } from "tailwind-variants";

export const alertVariants = tv({
  defaultVariants: {
    variant: "default",
  },
  slots: {
    action: [
      "flex gap-1",
      "max-sm:col-start-2 max-sm:mt-2",
      "sm:[svg~[data-scope=alert][data-part=title]~&]:col-start-3",
      "sm:row-start-1 sm:row-end-3 sm:self-center",
      "sm:[[data-scope=alert][data-part=description]~&]:col-start-2",
      "sm:[[data-scope=alert][data-part=title]~&]:col-start-2",
      "sm:[svg~&]:col-start-2",
      "sm:[svg~[data-scope=alert][data-part=description]~&]:col-start-3",
    ],
    description: ["flex flex-col gap-2.5", "text-muted-foreground", "[svg~&]:col-start-2"],
    root: [
      "relative",
      "px-3.5 py-3",
      "grid w-full items-start gap-x-2 gap-y-0.5",
      "text-card-foreground text-sm",
      "rounded-xl border",
      "has-[>svg]:has-[[data-scope=alert][data-part=action]]:grid-cols-[--spacing(4)_1fr_auto] has-[>svg]:grid-cols-[--spacing(4)_1fr]",
      "has-[>svg]:gap-x-2 [&_svg]:h-lh [&_svg]:w-4",
      "has-[[data-scope=alert][data-part=action]]:grid-cols-[1fr_auto]",
    ],
    title: ["font-heading font-medium", "[svg~&]:col-start-2"],
  },
  variants: {
    variant: {
      default: {
        root: [
          "bg-input/4",
          "[&_svg]:text-muted-foreground",
          "[&_[data-scope=alert][data-part=action]_[data-variant=ghost]]:hover:bg-muted",
        ],
      },
      destructive: {
        root: [
          "bg-destructive/4",
          "border-destructive/32",
          "[&_svg]:text-destructive",
          "[&_[data-scope=alert][data-part=action]_[data-variant=ghost]]:hover:bg-destructive/10",
        ],
      },
      info: {
        root: [
          "bg-info/4",
          "border-info/32",
          "[&_svg]:text-info",
          "[&_[data-scope=alert][data-part=action]_[data-variant=ghost]]:hover:bg-info/10",
        ],
      },
      success: {
        root: [
          "bg-success/4",
          "border-success/32",
          "[&_svg]:text-success",
          "[&_[data-scope=alert][data-part=action]_[data-variant=ghost]]:hover:bg-success/10",
        ],
      },
      warning: {
        root: [
          "bg-warning/4",
          "border-warning/32",
          "[&_svg]:text-warning",
          "[&_[data-scope=alert][data-part=action]_[data-variant=ghost]]:hover:bg-warning/10",
        ],
      },
    },
  },
});
export type AlertVariantProps = VariantProps<typeof alertVariants>;
