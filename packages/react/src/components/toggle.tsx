import {
  Toggle as TogglePrimitive,
  type ToggleRootProps,
} from "@ark-ui/react/toggle";
import type { ToggleProps as BaseToggleProps } from "@pisagor/props";
import {
  type ButtonVariantProps,
  buttonRecipe,
  toggleRecipe,
} from "@pisagor/recipes";

import { cn } from "@pisagor/utils";

// #region Types
export interface ToggleProps extends ToggleRootProps, BaseToggleProps {
  /**
   * The variant of the toggle
   *
   * @defaultValue "ghost"
   */
  variant?: Extract<ButtonVariantProps["variant"], "outline" | "ghost">;
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
    />
  );
}
// #endregion
