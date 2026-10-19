import {
  Accordion as AccordionPrimitive,
  type AccordionItemProps as AccordionItemPrimitiveProps,
  type AccordionRootProps as AccordionRootPrimitiveProps,
} from "@ark-ui/vue";
import { PhCaretDown } from "@phosphor-icons/vue";
import type {
  AccordionItemRootContract,
  AccordionItemContract,
  AccordionPresetItem as BaseAccordionPresetItem,
  AccordionRootContract,
  AccordionContract,
} from "@pisagor/contracts";
import { accordionItemRecipe, accordionRecipe } from "@pisagor/recipes";
import { defineComponent, h, type PropType, type VNodeChild } from "vue";
import { type ClassValue, createSlotRecipeContext } from "../internal";

// #region Context
const { withProvider: withAccordionProvider } = createSlotRecipeContext({
  name: "Accordion",
  recipe: accordionRecipe,
});

const {
  useStyles,
  withContext,
  withProvider: withItemProvider,
} = createSlotRecipeContext({
  name: "Accordion",
  recipe: accordionItemRecipe,
});
// #endregion

// #region Types
export type AccordionRootProps = AccordionRootPrimitiveProps &
  AccordionRootContract;

export type LocalAccordionItemProps = AccordionItemPrimitiveProps &
  AccordionItemRootContract &
  AccordionItemContract;

export interface AccordionPresetItem extends Omit<
  BaseAccordionPresetItem,
  "title" | "content"
> {
  value: string;
  title: VNodeChild;
  content: VNodeChild;
  disabled?: boolean;
}

export interface AccordionProps
  extends AccordionRootContract, AccordionContract {
  items?: AccordionPresetItem[];
  collapsible?: boolean;
  lazyMount?: boolean;
  unmountOnExit?: boolean;
}
// #endregion

// Ark Vue parts are polymorphic; `h()` overloads reject attr spreads without a cast.
type ArkPart = Parameters<typeof h>[0];

// #region Parts
const Root = withAccordionProvider<AccordionRootContract>(
  AccordionPrimitive.Root,
  {
    defaultProps: { collapsible: true },
    name: "Root",
    slot: "base",
  },
);

const Item = withItemProvider<LocalAccordionItemProps>(
  AccordionPrimitive.Item,
  {
    name: "Item",
    slot: "base",
  },
);

const ItemTrigger = withContext(AccordionPrimitive.ItemTrigger, {
  name: "ItemTrigger",
});

const ItemIndicator = defineComponent({
  inheritAttrs: false,
  name: "Accordion.ItemIndicator",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
  },
  setup(props, { attrs, slots }) {
    const styles = useStyles();

    return () =>
      h(
        AccordionPrimitive.ItemIndicator as ArkPart,
        {
          ...attrs,
          class: styles.slots.itemIndicator({ class: props.class }),
        },
        () => slots.default?.() ?? h(PhCaretDown),
      );
  },
});

const ItemContent = withContext(AccordionPrimitive.ItemContent, {
  name: "ItemContent",
});

const ItemBody = withContext("div", {
  name: "ItemBody",
});
// #endregion

// #region Shorthand
export const AccordionShorthand = defineComponent({
  inheritAttrs: false,
  name: "Accordion",
  props: {
    collapsible: { default: true, type: Boolean },
    items: {
      default: undefined,
      type: Array as PropType<AccordionPresetItem[]>,
    },
    lazyMount: { default: true, type: Boolean },
    size: {
      default: undefined,
      type: String as PropType<"sm" | "md" | "lg">,
    },
    unmountOnExit: { default: true, type: Boolean },
  },
  setup(props, { attrs }) {
    return () =>
      h(
        Root,
        {
          ...attrs,
          collapsible: props.collapsible,
          lazyMount: props.lazyMount,
          unmountOnExit: props.unmountOnExit,
        },
        () =>
          props.items?.map((item) =>
            h(
              Item,
              {
                disabled: item.disabled,
                key: item.value,
                size: props.size,
                value: item.value,
              },
              () => [
                h(ItemTrigger, null, () => [item.title, h(ItemIndicator)]),

                h(ItemContent, null, () =>
                  h(ItemBody, null, () => item.content),
                ),
              ],
            ),
          ),
      );
  },
});
// #endregion

export type {
  AccordionItemContentProps,
  AccordionItemIndicatorProps,
  AccordionItemTriggerProps,
} from "@ark-ui/vue";

export type AccordionItemProps = LocalAccordionItemProps;

export const Accordion = Object.assign(AccordionShorthand, {
  Item,
  ItemBody,
  ItemContent,
  ItemIndicator,
  ItemTrigger,
  Root,
});
