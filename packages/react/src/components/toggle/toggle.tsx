import { Toggle as TogglePrimitive } from "@ark-ui/react/toggle";
import { type ButtonVariantProps, buttonRecipe } from "@pisagor/recipes/button";
import { type ToggleVariantProps, toggleRecipe } from "@pisagor/recipes/toggle";
import type { ComponentProps } from "react";
import { cn } from "../../internal/utils";

// #region Types
export interface ToggleProps
  extends ComponentProps<typeof TogglePrimitive.Root>,
    ToggleVariantProps {
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
        buttonRecipe({ clickEffect: false, variant }).base(),
        toggleRecipe({ size }),
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
