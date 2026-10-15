import type {
  AccordionItemContentProps,
  AccordionItemTriggerProps,
  AccordionItemProps as AccordionPrimitiveItemProps,
  AccordionRootProps,
} from "@ark-ui/react/accordion";
import { Accordion as AccordionPrimitive } from "@ark-ui/react/accordion";
import { CaretDownIcon } from "@phosphor-icons/react";
import type { AccordionItemProps as BaseAccordionItemProps } from "@pisagor/props";
import { accordionItemRecipe } from "@pisagor/recipes";
import type { FunctionComponent, ReactNode } from "react";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";
import type { SizeScaleProps } from "../internal/types";

// #region Context
const { useStyles: useAccordionItem, withProvider } = createSlotRecipeContext({
  name: "Accordion",
  recipe: accordionItemRecipe,
});
// #endregion

// #region Types
export interface AccordionItemProps
  extends AccordionPrimitiveItemProps,
    BaseAccordionItemProps,
    SizeScaleProps {}

interface AccordionPresetItem {
  value: string;
  title: ReactNode;
  content: ReactNode;
  disabled?: boolean;
}

export interface AccordionProps extends Omit<AccordionRootProps, "children"> {
  items?: AccordionPresetItem[];
  /**
   * Size scale applied to every item.
   *
   * @defaultValue "md"
   */
  size?: "sm" | "md" | "lg";
}
// #endregion

// #region Parts
export function AccordionRoot({
  collapsible = true,
  children,
  ...rest
}: AccordionRootProps) {
  return (
    <AccordionPrimitive.Root {...rest} collapsible={collapsible}>
      {children}
    </AccordionPrimitive.Root>
  );
}

export const AccordionItem = withProvider(AccordionPrimitive.Item, {
  name: "Item",
  slot: "base",
}) as FunctionComponent<AccordionItemProps>;

export function AccordionItemTrigger({
  children,
  className,
  ...rest
}: AccordionItemTriggerProps) {
  const { slots } = useAccordionItem();

  return (
    <AccordionPrimitive.ItemTrigger
      {...rest}
      className={slots.trigger({ className })}
    >
      {children}

      <AccordionPrimitive.ItemIndicator>
        <CaretDownIcon className={slots.indicator()} />
      </AccordionPrimitive.ItemIndicator>
    </AccordionPrimitive.ItemTrigger>
  );
}

export function AccordionItemContent({
  children,
  className,
  ...rest
}: AccordionItemContentProps) {
  const { slots } = useAccordionItem();

  return (
    <AccordionPrimitive.ItemContent
      {...rest}
      className={slots.content({ className })}
    >
      <div className={slots.body()}>{children}</div>
    </AccordionPrimitive.ItemContent>
  );
}
// #endregion

// #region Shorthand
export function AccordionShorthand({ items, size, ...rest }: AccordionProps) {
  return (
    <AccordionRoot {...rest}>
      {items?.map((item) => (
        <AccordionItem
          disabled={item.disabled}
          key={item.value}
          size={size}
          value={item.value}
        >
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
AccordionItemTrigger.displayName = "Accordion.ItemTrigger";
AccordionItemContent.displayName = "Accordion.ItemContent";
AccordionShorthand.displayName = "Accordion";

// #endregion

export type {
  AccordionItemContentProps,
  AccordionItemTriggerProps,
  AccordionRootProps,
} from "@ark-ui/react/accordion";

export const Accordion = Object.assign(AccordionShorthand, {
  Item: AccordionItem,
  ItemContent: AccordionItemContent,
  ItemTrigger: AccordionItemTrigger,
  Root: AccordionRoot,
});
