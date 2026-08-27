import { Toggle as TogglePrimitive } from "@ark-ui/react/toggle";
import { type ButtonVariantProps, buttonVariants } from "@pisagor/recipes/button";
import { type ToggleVariantProps, toggleVariants } from "@pisagor/recipes/toggle";
import { cn } from "@pisagor/utils";
import type { ComponentProps } from "react";
// #region Types
export type ToggleRootProps = ComponentProps<typeof TogglePrimitive.Root>;

export interface ToggleProps extends ToggleRootProps, ToggleVariantProps {
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

// #region Part
export function Toggle({
  size = "md",
  variant = "ghost",
  onPressedChange,
  onValueChange,
  className,
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

// #region Display Names
Toggle.displayName = "Toggle";
// #endregion
