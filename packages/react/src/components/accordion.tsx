import { Accordion as AccordionPrimitive } from "@ark-ui/react";
import type {
  AccordionItemContentProps,
  AccordionItemProps as AccordionItemPrimitiveProps,
  AccordionItemTriggerProps,
  AccordionRootProps,
} from "@ark-ui/react";
import { CaretDownIcon } from "@phosphor-icons/react";
import type {
  AccordionItemRootContract,
  AccordionItemContract,
  AccordionPresetItem as BaseAccordionPresetItem,
  AccordionRootContract,
  AccordionContract,
} from "@pisagor/contracts";
import { accordionItemRecipe } from "@pisagor/recipes";
import type { FunctionComponent, ReactNode, ComponentProps } from "react";
import { createSlotRecipeContext } from "../internal";

// #region Context
const { useStyles, withProvider } = createSlotRecipeContext({
  name: "Accordion",
  recipe: accordionItemRecipe,
});
// #endregion

// #region Types
export type AccordionItemProps = AccordionItemPrimitiveProps &
  AccordionItemRootContract &
  AccordionItemContract;

interface AccordionPresetItem extends Omit<
  BaseAccordionPresetItem,
  "title" | "content"
> {
  title: ReactNode;
  content: ReactNode;
}

export interface AccordionProps
  extends
    Omit<AccordionRootProps, "children">,
    AccordionRootContract,
    AccordionContract {
  items?: AccordionPresetItem[];
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

export const AccordionItem = withProvider<
  ComponentProps<typeof AccordionPrimitive.Item> & AccordionItemRootContract
>(AccordionPrimitive.Item, {
  name: "Item",
  slot: "base",
}) as FunctionComponent<AccordionItemProps>;

export function AccordionItemTrigger({
  children,
  className,
  ...rest
}: AccordionItemTriggerProps) {
  const { slots } = useStyles();

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
  const { slots } = useStyles();

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

// #endregion

export type {
  AccordionItemContentProps,
  AccordionItemTriggerProps,
  AccordionRootProps,
} from "@ark-ui/react";

export const Accordion = Object.assign(AccordionShorthand, {
  Item: AccordionItem,
  ItemContent: AccordionItemContent,
  ItemTrigger: AccordionItemTrigger,
  Root: AccordionRoot,
});
