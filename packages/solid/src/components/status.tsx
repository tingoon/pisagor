import type { StatusRootContract } from "@pisagor/contracts";
import { type StatusVariantProps, statusRecipe } from "@pisagor/recipes";
import type { ComponentProps, JSX } from "solid-js";
import { splitProps } from "solid-js";

export interface StatusProps
  extends ComponentProps<"span">, StatusRootContract {
  size?: StatusVariantProps["size"];
  variant?: StatusVariantProps["variant"];
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
    <span
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
