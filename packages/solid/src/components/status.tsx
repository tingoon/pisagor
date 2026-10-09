import { ark } from "@ark-ui/solid/factory";
import type { StatusProps as BaseStatusProps } from "@pisagor/props";
import { statusRecipe } from "@pisagor/recipes";
import type { ComponentProps, JSX } from "solid-js";
import { splitProps } from "solid-js";

export interface StatusProps
  extends ComponentProps<typeof ark.span>,
    BaseStatusProps {
  size?: import("@pisagor/recipes/status").StatusVariantProps["size"];
  variant?: import("@pisagor/recipes/status").StatusVariantProps["variant"];
}

export function Status(props: StatusProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "class",
    "recipe",
    "size",
    "variant",
  ]);
  const recipeFn = () => local.recipe ?? statusRecipe;

  return (
    <ark.span
      {...rest}
      class={recipeFn()({
        class: local.class,
        size: local.size,
        variant: local.variant,
      })}
      data-part="indicator"
      data-scope="status"
      data-size={local.size}
    />
  );
}
