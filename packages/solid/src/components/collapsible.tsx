import { Collapsible as CollapsiblePrimitive } from "@ark-ui/solid";
import type {
  CollapsibleContentProps,
  CollapsibleIndicatorProps,
  CollapsibleRootProps as CollapsibleRootPrimitiveProps,
  CollapsibleTriggerProps,
} from "@ark-ui/solid";
import type { CollapsibleRootContract } from "@pisagor/props";
import { collapsibleRecipe } from "@pisagor/recipes";
import type { Component, JSX } from "solid-js";
import { createMemo, splitProps } from "solid-js";
import { CaretDownIcon, createSlotRecipeContext } from "../internal";

// #region Context
const {
  Context: CollapsibleStylesContext,
  useStyles,
  withContext,
} = createSlotRecipeContext({
  name: "Collapsible",
  recipe: collapsibleRecipe,
});
// #endregion

// #region Types
export interface LocalCollapsibleRootProps
  extends CollapsibleRootPrimitiveProps, CollapsibleRootContract {}
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
  const styles = useStyles();

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
  const styles = useStyles();

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
} from "@ark-ui/solid";

export const Collapsible = Object.assign(CollapsibleRoot, {
  Content: CollapsibleContent,
  Indicator: CollapsibleIndicator,
  Trigger: CollapsibleTrigger,
});
