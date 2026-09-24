import {
  type CollapsibleContentProps,
  type CollapsibleIndicatorProps,
  Collapsible as CollapsiblePrimitive,
  type CollapsibleRootProps as CollapsiblePrimitiveRootProps,
  type CollapsibleTriggerProps,
} from "@ark-ui/solid/collapsible";
import { collapsibleRecipe } from "@pisagor/recipes/collapsible";
import { cn } from "@pisagor/utils";
import type { JSX } from "solid-js";
import { splitProps } from "solid-js";
import { CaretDownIcon } from "../../internal/icons";
import { CollapsibleContext, useCollapsible } from "./collapsible.context";

export interface CollapsibleRootProps extends CollapsiblePrimitiveRootProps {
  recipe?: typeof collapsibleRecipe;
}

export function CollapsibleRoot(props: CollapsibleRootProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "lazyMount",
    "unmountOnExit",
    "children",
    "collapsedHeight",
    "recipe",
    "class",
  ]);
  const slots = () => (local.recipe ?? collapsibleRecipe)();
  const collapsedHeight = () => local.collapsedHeight;

  return (
    <CollapsibleContext value={{ slots: slots() }}>
      <CollapsiblePrimitive.Root
        {...rest}
        class={slots().base({ class: cn(local.class) })}
        collapsedHeight={collapsedHeight()}
        data-partial-collapse={collapsedHeight() ? "" : undefined}
        lazyMount={collapsedHeight() ? false : local.lazyMount}
        unmountOnExit={collapsedHeight() ? false : local.unmountOnExit}
      >
        {local.children}
      </CollapsiblePrimitive.Root>
    </CollapsibleContext>
  );
}

export function CollapsibleTrigger(props: CollapsibleTriggerProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useCollapsible();
  return (
    <CollapsiblePrimitive.Trigger {...rest} class={slots.trigger({ class: cn(local.class) })} />
  );
}

export function CollapsibleContent(props: CollapsibleContentProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class"]);
  const { slots } = useCollapsible();
  return (
    <CollapsiblePrimitive.Content {...rest} class={slots.content()}>
      <div class={local.class}>{local.children}</div>
    </CollapsiblePrimitive.Content>
  );
}

export function CollapsibleIndicator(props: CollapsibleIndicatorProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useCollapsible();
  return (
    <CollapsiblePrimitive.Indicator {...rest} class={slots.indicator({ class: cn(local.class) })}>
      <CaretDownIcon class={slots.icon()} />
    </CollapsiblePrimitive.Indicator>
  );
}
