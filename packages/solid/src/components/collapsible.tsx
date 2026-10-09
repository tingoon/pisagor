import {
  type CollapsibleContentProps,
  type CollapsibleIndicatorProps,
  Collapsible as CollapsiblePrimitive,
  type CollapsibleRootProps as CollapsiblePrimitiveRootProps,
  type CollapsibleTriggerProps,
} from "@ark-ui/solid/collapsible";
import type { CollapsibleProps as BaseCollapsibleRootProps } from "@pisagor/props";
import { collapsibleRecipe } from "@pisagor/recipes";
import type { Component, JSX } from "solid-js";
import { createMemo, splitProps } from "solid-js";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";
import { CaretDownIcon } from "../internal/icons";

// #region Context
const {
  Context: CollapsibleStylesContext,
  useStyles: useCollapsible,
  withContext,
} = createSlotRecipeContext({
  name: "Collapsible",
  recipe: collapsibleRecipe,
});
// #endregion

// #region Types
export interface LocalCollapsibleRootProps
  extends CollapsiblePrimitiveRootProps,
    BaseCollapsibleRootProps {}
// #endregion

// #region Parts
export function CollapsibleRoot(props: LocalCollapsibleRootProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "lazyMount",
    "unmountOnExit",
    "children",
    "collapsedHeight",
    "recipe",
    "class",
  ]);
  const slots = createMemo(() => (local.recipe ?? collapsibleRecipe)());
  const partial = () => !!local.collapsedHeight;

  return (
    <CollapsibleStylesContext
      value={{
        get slots() {
          return slots();
        },
        variants: {},
      }}
    >
      <CollapsiblePrimitive.Root
        {...rest}
        class={slots().base({ class: local.class })}
        collapsedHeight={local.collapsedHeight}
        data-partial-collapse={partial() ? "" : undefined}
        lazyMount={partial() ? false : local.lazyMount}
        unmountOnExit={partial() ? false : local.unmountOnExit}
      >
        {local.children}
      </CollapsiblePrimitive.Root>
    </CollapsibleStylesContext>
  );
}

export const CollapsibleTrigger: Component<CollapsibleTriggerProps> =
  withContext(CollapsiblePrimitive.Trigger, { name: "Trigger" });

/** `class` targets the inner body wrapper; the content slot animates height. */
export function CollapsibleContent(
  props: CollapsibleContentProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class"]);
  const styles = useCollapsible();

  return (
    <CollapsiblePrimitive.Content {...rest} class={styles.slots.content()}>
      <div class={local.class}>{local.children}</div>
    </CollapsiblePrimitive.Content>
  );
}

export function CollapsibleIndicator(
  props: CollapsibleIndicatorProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useCollapsible();

  return (
    <CollapsiblePrimitive.Indicator
      {...rest}
      class={styles.slots.indicator({ class: local.class })}
    >
      <CaretDownIcon class={styles.slots.icon()} />
    </CollapsiblePrimitive.Indicator>
  );
}
// #endregion

export type {
  CollapsibleContentProps,
  CollapsibleIndicatorProps,
  CollapsibleRootProps,
  CollapsibleTriggerProps,
} from "@ark-ui/solid/collapsible";

export const Collapsible = Object.assign(CollapsibleRoot, {
  Content: CollapsibleContent,
  Indicator: CollapsibleIndicator,
  Trigger: CollapsibleTrigger,
});
