import {
  type AccordionItemContentProps,
  type AccordionItemTriggerProps,
  Accordion as AccordionPrimitive,
  type AccordionItemProps as AccordionPrimitiveItemProps,
  type AccordionRootProps,
} from "@ark-ui/solid/accordion";
import type { AccordionItemProps as BaseAccordionItemProps } from "@pisagor/props";
import { accordionItemRecipe } from "@pisagor/recipes";
import type { Component, JSX } from "solid-js";
import { For, splitProps } from "solid-js";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";
import { CaretDownIcon } from "../internal/icons";

// #region Context
const { useStyles: useAccordionItem, withProvider } = createSlotRecipeContext({
  name: "Accordion",
  recipe: accordionItemRecipe,
});
// #endregion

// #region Types
export interface LocalAccordionItemProps
  extends AccordionPrimitiveItemProps,
    BaseAccordionItemProps {}

interface AccordionPresetItem {
  value: string;
  title: JSX.Element;
  content: JSX.Element;
  disabled?: boolean;
}

export interface AccordionProps extends Omit<AccordionRootProps, "children"> {
  items?: AccordionPresetItem[];
}
// #endregion

// #region Parts

export function AccordionRoot(props: AccordionRootProps): JSX.Element {
  const [local, rest] = splitProps(props, ["collapsible", "children"]);
  return (
    <AccordionPrimitive.Root {...rest} collapsible={local.collapsible ?? true}>
      {local.children}
    </AccordionPrimitive.Root>
  );
}

export const AccordionItem: Component<LocalAccordionItemProps> = withProvider(
  AccordionPrimitive.Item,
  { name: "Item", slot: "base" },
);

export function AccordionItemTrigger(
  props: AccordionItemTriggerProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class"]);
  const styles = useAccordionItem();

  return (
    <AccordionPrimitive.ItemTrigger
      {...rest}
      class={styles.slots.trigger({ class: local.class })}
    >
      {local.children}
      <AccordionPrimitive.ItemIndicator>
        <CaretDownIcon class={styles.slots.indicator()} />
      </AccordionPrimitive.ItemIndicator>
    </AccordionPrimitive.ItemTrigger>
  );
}

export function AccordionItemContent(
  props: AccordionItemContentProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class"]);
  const styles = useAccordionItem();

  return (
    <AccordionPrimitive.ItemContent
      {...rest}
      class={styles.slots.content({ class: local.class })}
    >
      <div class={styles.slots.body()}>{local.children}</div>
    </AccordionPrimitive.ItemContent>
  );
}

// #endregion

// #region Shorthand
export function AccordionShorthand(props: AccordionProps): JSX.Element {
  const [local, rest] = splitProps(props, ["items"]);

  return (
    <AccordionRoot {...rest}>
      <For each={local.items}>
        {(item) => (
          <AccordionItem disabled={item.disabled} value={item.value}>
            <AccordionItemTrigger>{item.title}</AccordionItemTrigger>
            <AccordionItemContent>{item.content}</AccordionItemContent>
          </AccordionItem>
        )}
      </For>
    </AccordionRoot>
  );
}
// #endregion

export type {
  AccordionItemContentProps,
  AccordionItemProps,
  AccordionItemTriggerProps,
  AccordionRootProps,
} from "@ark-ui/solid/accordion";

export const Accordion = Object.assign(AccordionShorthand, {
  Item: AccordionItem,
  ItemContent: AccordionItemContent,
  ItemTrigger: AccordionItemTrigger,
  Root: AccordionRoot,
});
