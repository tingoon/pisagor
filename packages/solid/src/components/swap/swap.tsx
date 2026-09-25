import {
  type SwapIndicatorProps,
  Swap as SwapPrimitive,
  type SwapRootProps,
} from "@ark-ui/solid/swap";
import { type SwapVariantProps, swapRecipe } from "@pisagor/recipes/swap";
import { cn } from "@pisagor/utils";
import type { JSX } from "solid-js";
import { Show, splitProps } from "solid-js";

export type SwapOnIndicatorProps = SwapIndicatorProps;
export type SwapOffIndicatorProps = SwapIndicatorProps;

export interface SwapProps extends SwapRootProps, SwapVariantProps {
  off?: JSX.Element;
  on?: JSX.Element;
  recipe?: typeof swapRecipe;
  offIndicatorProps?: Omit<
    SwapOffIndicatorProps,
    "children" | "type" | "class"
  >;
  onIndicatorProps?: Omit<SwapOnIndicatorProps, "children" | "type" | "class">;
}

export function Swap(props: SwapProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "variant",
    "children",
    "off",
    "offIndicatorProps",
    "on",
    "onIndicatorProps",
    "recipe",
    "class",
  ]);

  return (
    <SwapPrimitive.Root
      {...rest}
      class={(local.recipe ?? swapRecipe)({
        class: cn(local.class),
        variant: local.variant ?? "fade",
      })}
    >
      <Show when={local.on !== undefined}>
        <SwapPrimitive.Indicator {...local.onIndicatorProps} type="on">
          {local.on}
        </SwapPrimitive.Indicator>
      </Show>
      <Show when={local.off !== undefined}>
        <SwapPrimitive.Indicator {...local.offIndicatorProps} type="off">
          {local.off}
        </SwapPrimitive.Indicator>
      </Show>
      {local.children}
    </SwapPrimitive.Root>
  );
}
