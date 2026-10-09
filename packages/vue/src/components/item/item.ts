import { ark } from "@ark-ui/vue/factory";
import type { ItemProps as BaseItemProps } from "@pisagor/props";
import { type ItemVariantProps, itemRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import { computed, defineComponent, h, type PropType, unref } from "vue";
import { createSlotRecipeContext } from "../../internal/create-slot-recipe-context";
import { useItemGroupContextRef } from "./item-group.context";

type ArkPart = Parameters<typeof h>[0];

// #region Context
const {
  provideStyles: provideItemStyles,
  useStyles: useItem,
  withContext,
} = createSlotRecipeContext({
  name: "Item",
  recipe: itemRecipe,
});
// #endregion

// #region Types
export interface ItemProps extends BaseItemProps {
  class?: unknown;
}

export interface ItemMediaProps extends ItemVariantProps {
  class?: unknown;
}

export interface ItemHeaderProps {
  class?: unknown;
}
// #endregion

// #region Parts
export const ItemRoot = defineComponent({
  inheritAttrs: false,
  name: "Item",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<unknown>,
    },
    recipe: {
      default: itemRecipe,
      type: Function as PropType<typeof itemRecipe>,
    },
    variant: {
      default: undefined,
      type: String as PropType<ItemVariantProps["variant"]>,
    },
  },
  setup(props, { attrs, slots }) {
    const groupRef = useItemGroupContextRef();
    const variants = computed(() => {
      const group = groupRef === undefined ? undefined : unref(groupRef);

      return {
        ...itemRecipe.defaultVariants,
        ...props.recipe.defaultVariants,
        variant: props.variant ?? group?.variant ?? "default",
      };
    });
    const itemSlots = computed(() => props.recipe(variants.value));

    provideItemStyles({
      get slots() {
        return itemSlots.value;
      },
      get variants() {
        return variants.value;
      },
    });

    return () =>
      h(
        ark.div as ArkPart,
        {
          ...attrs,
          class: itemSlots.value.base({ class: cn(props.class) }),
          "data-part": "root",
          "data-scope": "item",
          "data-variant": variants.value.variant,
        },
        slots.default?.(),
      );
  },
});

export const ItemMedia = defineComponent({
  inheritAttrs: false,
  name: "Item.Media",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<unknown>,
    },
    variant: {
      default: "default",
      type: String as PropType<ItemVariantProps["variant"]>,
    },
  },
  setup(props, { attrs, slots }) {
    const styles = useItem();

    return () =>
      h(
        ark.div as ArkPart,
        {
          ...attrs,
          class: styles.slots.media({
            class: cn(props.class),
            variant: props.variant,
          }),
          "data-part": "media",
          "data-scope": "item",
          "data-variant": props.variant,
        },
        slots.default?.(),
      );
  },
});

export const ItemContent = withContext(ark.div, {
  name: "Content",
  slot: "content",
});

export const ItemTitle = withContext(ark.div, {
  name: "Title",
  slot: "title",
});

export const ItemDescription = withContext(ark.p, {
  name: "Description",
  slot: "description",
});

export const ItemActions = withContext(ark.div, {
  name: "Actions",
  slot: "actions",
});

export const ItemHeader = withContext(ark.div, {
  name: "Header",
  slot: "header",
});

export const ItemFooter = withContext(ark.div, {
  name: "Footer",
  slot: "footer",
});
// #endregion
