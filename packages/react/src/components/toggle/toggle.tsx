import {
  Toggle as TogglePrimitive,
  type ToggleRootProps,
} from "@ark-ui/react/toggle";
import type { ToggleProps as ToggleSharedProps } from "@pisagor/props";
import {
  type ButtonVariantProps,
  buttonRecipe,
  toggleRecipe,
} from "@pisagor/recipes";

import { cn } from "@pisagor/utils";

// #region Types
export interface ToggleProps extends ToggleRootProps, ToggleSharedProps {
  /**
   * The variant of the toggle
   *
   * @defaultValue "ghost"
   */
  variant?: Extract<ButtonVariantProps["variant"], "outline" | "ghost">;
  /** Called with the pressed state when the toggle changes. */
  onValueChange?: (value: boolean) => void;
  /**
   * Button style recipe. Defaults to `buttonRecipe` from `@pisagor/recipes/button`.
   *
   * @defaultValue buttonRecipe
   */
  buttonRecipe?: typeof buttonRecipe;
}
// #endregion

// #region Component
export function Toggle({
  size = "md",
  variant = "ghost",
  onPressedChange,
  onValueChange,
  recipe = toggleRecipe,
  buttonRecipe: buttonRecipeProp = buttonRecipe,
  className,
  ...rest
}: ToggleProps) {
  return (
    <TogglePrimitive.Root
      {...rest}
      className={cn(
        buttonRecipeProp({ clickEffect: false, variant }).base(),
        recipe({ size }),
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
