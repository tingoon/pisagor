import {
  type AccordionItemContentProps,
  type AccordionItemTriggerProps,
  Accordion as AccordionPrimitive,
  type AccordionItemProps as AccordionPrimitiveItemProps,
  type AccordionRootProps,
} from "@ark-ui/solid/accordion";
import { accordionItemRecipe } from "@pisagor/recipes/accordion";
import { cn } from "@pisagor/utils";
import type { JSX } from "solid-js";
import { For, splitProps } from "solid-js";
import { CaretDownIcon } from "../../internal/icons";
import { AccordionItemContext, useAccordionItem } from "./accordion.context";

export interface AccordionItemProps extends AccordionPrimitiveItemProps {
  itemRecipe?: typeof accordionItemRecipe;
}

interface AccordionPresetItem {
  value: string;
  title: JSX.Element;
  content: JSX.Element;
  disabled?: boolean;
}

export interface AccordionProps extends Omit<AccordionRootProps, "children"> {
  items?: AccordionPresetItem[];
}

export function AccordionRoot(props: AccordionRootProps): JSX.Element {
  const [local, rest] = splitProps(props, ["collapsible", "children"]);
  return (
    <AccordionPrimitive.Root {...rest} collapsible={local.collapsible ?? true}>
      {local.children}
    </AccordionPrimitive.Root>
  );
}

export function AccordionItem(props: AccordionItemProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "itemRecipe", "class"]);
  const slots = () => (local.itemRecipe ?? accordionItemRecipe)();

  return (
    <AccordionItemContext value={{ slots: slots() }}>
      <AccordionPrimitive.Item {...rest} class={slots().base({ class: cn(local.class) })}>
        {local.children}
      </AccordionPrimitive.Item>
    </AccordionItemContext>
  );
}

export function AccordionItemTrigger(props: AccordionItemTriggerProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class"]);
  const { slots } = useAccordionItem();

  return (
    <AccordionPrimitive.ItemTrigger {...rest} class={slots.trigger({ class: cn(local.class) })}>
      {local.children}
      <AccordionPrimitive.ItemIndicator>
        <CaretDownIcon class={slots.indicator()} />
      </AccordionPrimitive.ItemIndicator>
    </AccordionPrimitive.ItemTrigger>
  );
}

export function AccordionItemContent(props: AccordionItemContentProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class"]);
  const { slots } = useAccordionItem();

  return (
    <AccordionPrimitive.ItemContent {...rest} class={slots.content({ class: cn(local.class) })}>
      <div class={slots.body()}>{local.children}</div>
    </AccordionPrimitive.ItemContent>
  );
}

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
