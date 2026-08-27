import { Accordion as AccordionPrimitive } from "@ark-ui/react/accordion";
import { CaretDownIcon } from "@phosphor-icons/react";
import { accordionItemVariants } from "@pisagor/recipes/accordion";
import type { ComponentProps, ReactNode } from "react";
import { useMemo } from "react";
import { AccordionItemContext, useAccordionItem } from "./accordion.context";

// #region Types
interface AccordionPresetItem {
  value: string;
  title: ReactNode;
  content: ReactNode;
  disabled?: boolean;
}

export type AccordionRootProps = ComponentProps<typeof AccordionPrimitive.Root>;

export type AccordionItemProps = ComponentProps<typeof AccordionPrimitive.Item>;

export type AccordionItemTriggerProps = ComponentProps<typeof AccordionPrimitive.ItemTrigger>;

export type AccordionItemContentProps = ComponentProps<typeof AccordionPrimitive.ItemContent>;

export interface AccordionProps extends Omit<AccordionRootProps, "children"> {
  items?: AccordionPresetItem[];
}
// #endregion

// #region Parts
export function AccordionRoot({ collapsible = true, children, ...rest }: AccordionRootProps) {
  return (
    <AccordionPrimitive.Root {...rest} collapsible={collapsible}>
      {children}
    </AccordionPrimitive.Root>
  );
}

export function AccordionItem({ children, className, ...rest }: AccordionItemProps) {
  const slots = useMemo(() => accordionItemVariants(), []);

  return (
    <AccordionItemContext value={{ slots }}>
      <AccordionPrimitive.Item {...rest} className={slots.base({ className })}>
        {children}
      </AccordionPrimitive.Item>
    </AccordionItemContext>
  );
}

export function AccordionItemTrigger({ children, className, ...rest }: AccordionItemTriggerProps) {
  const { slots } = useAccordionItem();

  return (
    <AccordionPrimitive.ItemTrigger {...rest} className={slots.trigger({ className })}>
      {children}

      <AccordionPrimitive.ItemIndicator>
        <CaretDownIcon className={slots.indicator()} />
      </AccordionPrimitive.ItemIndicator>
    </AccordionPrimitive.ItemTrigger>
  );
}

export function AccordionItemContent({ children, className, ...rest }: AccordionItemContentProps) {
  const { slots } = useAccordionItem();

  return (
    <AccordionPrimitive.ItemContent {...rest} className={slots.content({ className })}>
      <div className={slots.body()}>{children}</div>
    </AccordionPrimitive.ItemContent>
  );
}
// #endregion

// #region Shorthand
export function AccordionShorthand({ items, ...rest }: AccordionProps) {
  return (
    <AccordionRoot {...rest}>
      {items?.map((item) => (
        <AccordionItem disabled={item.disabled} key={item.value} value={item.value}>
          <AccordionItemTrigger>{item.title}</AccordionItemTrigger>
          <AccordionItemContent>{item.content}</AccordionItemContent>
        </AccordionItem>
      ))}
    </AccordionRoot>
  );
}
// #endregion

// #region Display Names
AccordionRoot.displayName = "Accordion.Root";
AccordionItem.displayName = "Accordion.Item";
AccordionItemTrigger.displayName = "Accordion.ItemTrigger";
AccordionItemContent.displayName = "Accordion.ItemContent";
AccordionShorthand.displayName = "Accordion";
// #endregion
