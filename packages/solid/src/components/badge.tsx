import type { BadgeRootContract } from "@pisagor/contracts";
import { badgeRecipe } from "@pisagor/recipes";
import type { ComponentProps, JSX } from "solid-js";
import { splitProps } from "solid-js";

export interface BadgeProps extends ComponentProps<"span">, BadgeRootContract {}

export function Badge(props: BadgeProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "pill",
    "size",
    "variant",
    "recipe",
    "class",
  ]);
  const recipe = () => local.recipe ?? badgeRecipe;

  return (
    <span
      {...rest}
      class={recipe()({
        class: local.class,
        pill: local.pill,
        size: local.size,
        variant: local.variant,
      })}
      data-part="root"
      data-scope="badge"
      data-size={local.size ?? "md"}
      data-variant={local.variant ?? "default"}
    />
  );
}
