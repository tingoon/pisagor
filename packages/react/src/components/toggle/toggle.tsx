import { Toggle as TogglePrimitive } from "@ark-ui/react/toggle";
import { buttonVariants } from "@pisagor/styles/ui/button";
import { toggleVariants } from "@pisagor/styles/ui/toggle";
import { cn } from "@pisagor/utils";
import type { ComponentProps } from "react";
import type { VariantProps } from "tailwind-variants";
import type { WithTestId } from "../../internal/types";

// #region Variants

// #endregion

// #region Types
type ToggleVariantProps = VariantProps<typeof toggleVariants>;

type ButtonVariantProps = VariantProps<typeof buttonVariants>;

type ToggleRootProps = ComponentProps<typeof TogglePrimitive.Root>;

export interface ToggleProps extends ToggleRootProps, ToggleVariantProps, WithTestId {
  /**
   * The variant of the toggle
   *
   * @defaultValue "ghost"
   */
  variant?: Extract<ButtonVariantProps["variant"], "outline" | "ghost">;
  /** Called with the pressed state when the toggle changes. */
  onValueChange?: (value: boolean) => void;
}
// #endregion

// #region Component
export function Toggle({
  variant = "ghost",
  size = "md",
  className,
  onPressedChange,
  onValueChange,
  testId,
  ...rest
}: ToggleProps) {
  return (
    <TogglePrimitive.Root
      {...rest}
      className={cn(
        buttonVariants({ clickEffect: false, variant }),
        toggleVariants({ size }),
        className,
      )}
      data-testid={testId}
      onPressedChange={
        onPressedChange || onValueChange
          ? (pressed) => {
              onPressedChange?.(pressed);
              onValueChange?.(pressed);
            }
          : undefined
      }
    />
  );
}
// #endregion
