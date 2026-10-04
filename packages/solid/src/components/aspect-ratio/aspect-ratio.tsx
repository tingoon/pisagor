import { ark } from "@ark-ui/solid/factory";
import type { AspectRatioProps as AspectRatioSharedProps } from "@pisagor/props";
import { aspectRatioRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import type { ComponentProps, JSX } from "solid-js";
import { splitProps } from "solid-js";

export interface AspectRatioProps
  extends ComponentProps<typeof ark.div>,
    AspectRatioSharedProps {}

export function AspectRatio(props: AspectRatioProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class", "recipe"]);
  const recipeFn = () => local.recipe ?? aspectRatioRecipe;

  return (
    <ark.div
      {...rest}
      class={recipeFn()({ class: cn(local.class) })}
      data-part="root"
      data-scope="aspect-ratio"
    />
  );
}
