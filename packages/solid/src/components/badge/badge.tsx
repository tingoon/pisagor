import { ark } from "@ark-ui/solid/factory";
import type { BadgeProps as BaseBadgeProps } from "@pisagor/props";
import { type BadgeVariantProps, badgeRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import type { ComponentProps, JSX } from "solid-js";
import { splitProps } from "solid-js";

export type BadgeVariant = NonNullable<BadgeVariantProps["variant"]>;

export interface BadgeProps
  extends ComponentProps<typeof ark.span>,
    BaseBadgeProps {}

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
    <ark.span
      {...rest}
      class={recipe()({
        class: cn(local.class),
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
