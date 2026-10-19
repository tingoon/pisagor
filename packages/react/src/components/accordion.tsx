import { Accordion as AccordionPrimitive } from "@ark-ui/react";
import type {
  AccordionItemContentProps,
  AccordionItemIndicatorProps,
  AccordionItemProps as AccordionItemPrimitiveProps,
  AccordionItemTriggerProps,
  AccordionRootProps as AccordionRootPrimitiveProps,
} from "@ark-ui/react";
import { CaretDownIcon } from "@phosphor-icons/react";
import type {
  AccordionItemRootContract,
  AccordionItemContract,
  AccordionPresetItem as BaseAccordionPresetItem,
  AccordionRootContract,
  AccordionContract,
} from "@pisagor/contracts";
import { accordionItemRecipe, accordionRecipe } from "@pisagor/recipes";
import type { ComponentProps, ReactNode } from "react";
import { createSlotRecipeContext } from "../internal";

// #region Context
const { withProvider: withAccordionProvider } = createSlotRecipeContext({
  name: "Accordion",
  recipe: accordionRecipe,
});

const { withContext, withProvider: withItemProvider } = createSlotRecipeContext(
  {
    name: "Accordion",
    recipe: accordionItemRecipe,
  },
);
// #endregion

// #region Types
export type AccordionRootProps = AccordionRootPrimitiveProps &
  AccordionRootContract;

export type AccordionItemProps = AccordionItemPrimitiveProps &
  AccordionItemRootContract &
  AccordionItemContract;

export type AccordionItemBodyProps = ComponentProps<"div">;

interface AccordionPresetItem extends Omit<
  BaseAccordionPresetItem,
  "title" | "content"
> {
  title: ReactNode;
  content: ReactNode;
}

export interface AccordionProps
  extends Omit<AccordionRootProps, "children">, AccordionContract {
  items?: AccordionPresetItem[];
}
// #endregion

// #region Parts
const Root = withAccordionProvider<AccordionRootProps>(
  AccordionPrimitive.Root,
  {
    defaultProps: { collapsible: true },
    name: "Root",
    slot: "base",
  },
);

const Item = withItemProvider<AccordionItemProps>(AccordionPrimitive.Item, {
  name: "Item",
  slot: "base",
});

const ItemTrigger = withContext<AccordionItemTriggerProps>(
  AccordionPrimitive.ItemTrigger,
  { name: "ItemTrigger" },
);

const ItemIndicator = withContext<AccordionItemIndicatorProps>(
  AccordionPrimitive.ItemIndicator,
  {
    defaultProps: { children: <CaretDownIcon /> },
    name: "ItemIndicator",
  },
);

const ItemContent = withContext<AccordionItemContentProps>(
  AccordionPrimitive.ItemContent,
  { name: "ItemContent" },
);

const ItemBody = withContext<AccordionItemBodyProps>("div", {
  name: "ItemBody",
});
// #endregion

// #region Shorthand
export function AccordionShorthand({ items, size, ...rest }: AccordionProps) {
  return (
    <Root {...rest}>
      {items?.map((item) => (
        <Item
          disabled={item.disabled}
          key={item.value}
          size={size}
          value={item.value}
        >
          <ItemTrigger>
            {item.title}

            <ItemIndicator />
          </ItemTrigger>

          <ItemContent>
            <ItemBody>{item.content}</ItemBody>
          </ItemContent>
        </Item>
      ))}
    </Root>
  );
}
// #endregion

export type {
  AccordionItemContentProps,
  AccordionItemIndicatorProps,
  AccordionItemTriggerProps,
} from "@ark-ui/react";

export const Accordion = Object.assign(AccordionShorthand, {
  Item,
  ItemBody,
  ItemContent,
  ItemIndicator,
  ItemTrigger,
  Root,
});
