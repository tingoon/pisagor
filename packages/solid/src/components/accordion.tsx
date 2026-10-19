import { Accordion as AccordionPrimitive } from "@ark-ui/solid";
import type {
  AccordionItemContentProps,
  AccordionItemProps as AccordionItemPrimitiveProps,
  AccordionItemTriggerProps,
  AccordionRootProps,
} from "@ark-ui/solid";
import type {
  AccordionItemRootContract,
  AccordionItemContract,
  AccordionPresetItem as BaseAccordionPresetItem,
  AccordionRootContract,
  AccordionContract,
} from "@pisagor/contracts";
import { accordionItemRecipe } from "@pisagor/recipes";
import type { Component, JSX, ComponentProps } from "solid-js";
import { For, splitProps } from "solid-js";
import { CaretDownIcon, createSlotRecipeContext } from "../internal";

// #region Context
const { useStyles, withProvider } = createSlotRecipeContext({
  name: "Accordion",
  recipe: accordionItemRecipe,
});
// #endregion

// #region Types
export type LocalAccordionItemProps = AccordionItemPrimitiveProps &
  AccordionItemRootContract &
  AccordionItemContract;

interface AccordionPresetItem extends Omit<
  BaseAccordionPresetItem,
  "title" | "content"
> {
  title: JSX.Element;
  content: JSX.Element;
}

export interface AccordionProps
  extends
    Omit<AccordionRootProps, "children">,
    AccordionRootContract,
    Omit<AccordionContract, "items"> {
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

export const AccordionItem: Component<LocalAccordionItemProps> = withProvider<
  ComponentProps<typeof AccordionPrimitive.Item> & AccordionItemRootContract
>(AccordionPrimitive.Item, {
  name: "Item",
  slot: "base",
});

export function AccordionItemTrigger(
  props: AccordionItemTriggerProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class"]);
  const styles = useStyles();

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
  const styles = useStyles();

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
  const [local, rest] = splitProps(props, ["items", "size"]);

  return (
    <AccordionRoot {...rest}>
      <For each={local.items}>
        {(item) => (
          <AccordionItem
            disabled={item.disabled}
            size={local.size}
            value={item.value}
          >
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
} from "@ark-ui/solid";

export const Accordion = Object.assign(AccordionShorthand, {
  Item: AccordionItem,
  ItemContent: AccordionItemContent,
  ItemTrigger: AccordionItemTrigger,
  Root: AccordionRoot,
});
