import {
  Toggle as TogglePrimitive,
  type ToggleRootProps,
} from "@ark-ui/solid/toggle";
import type { ToggleProps as ToggleSharedProps } from "@pisagor/props";
import {
  type ButtonVariantProps,
  buttonRecipe,
  toggleRecipe,
} from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import type { JSX } from "solid-js";
import { splitProps } from "solid-js";

export interface ToggleProps extends ToggleRootProps, ToggleSharedProps {
  variant?: Extract<ButtonVariantProps["variant"], "outline" | "ghost">;
  onValueChange?: (value: boolean) => void;
  buttonRecipe?: typeof buttonRecipe;
}

export function Toggle(props: ToggleProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "size",
    "variant",
    "onPressedChange",
    "onValueChange",
    "recipe",
    "buttonRecipe",
    "class",
  ]);
  const size = () => local.size ?? "md";
  const variant = () => local.variant ?? "ghost";
  const buttonRecipeFn = () => local.buttonRecipe ?? buttonRecipe;
  const recipeFn = () => local.recipe ?? toggleRecipe;

  return (
    <TogglePrimitive.Root
      {...rest}
      class={cn(
        buttonRecipeFn()({ clickEffect: false, variant: variant() }).base(),
        recipeFn()({ size: size() }),
        local.class,
      )}
      onPressedChange={
        local.onPressedChange || local.onValueChange
          ? (pressed) => {
              local.onPressedChange?.(pressed);
              local.onValueChange?.(pressed);
            }
          : undefined
      }
    />
  );
}
