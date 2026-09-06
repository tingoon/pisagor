import { Toggle as TogglePrimitive, type ToggleRootProps } from "@ark-ui/react/toggle";
import { type ButtonVariantProps, buttonRecipe } from "@pisagor/recipes/button";
import { type ToggleVariantProps, toggleRecipe } from "@pisagor/recipes/toggle";

import { cn } from "@pisagor/utils";

// #region Types
export interface ToggleProps extends ToggleRootProps, ToggleVariantProps {
  /**
   * The variant of the toggle
   *
   * @defaultValue "ghost"
   */
  variant?: Extract<ButtonVariantProps["variant"], "outline" | "ghost">;
  /** Called with the pressed state when the toggle changes. */
  onValueChange?: (value: boolean) => void;
  /**
   * Style recipe. Defaults to `toggleRecipe` from `@pisagor/recipes/toggle`.
   *
   * @defaultValue toggleRecipe
   */
  recipe?: typeof toggleRecipe;
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
