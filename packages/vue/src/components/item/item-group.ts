import { ark } from "@ark-ui/vue/factory";
import { type ItemVariantProps, itemRecipe } from "@pisagor/recipes/item";
import { cn } from "@pisagor/utils";
import { computed, defineComponent, h, type PropType } from "vue";
import { Separator } from "../separator";
import { provideItemGroupContext } from "./item-group.context";

type ArkPart = Parameters<typeof h>[0];

// #region Types
export interface ItemGroupProps extends ItemVariantProps {
  /**
   * Style recipe. Defaults to `itemRecipe` from `@pisagor/recipes/item`.
   *
   * @defaultValue itemRecipe
   */
  recipe?: typeof itemRecipe;
  class?: unknown;
}
// #endregion

// #region Parts
export const ItemGroup = defineComponent({
  inheritAttrs: false,
  name: "ItemGroup",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    recipe: {
      default: itemRecipe,
      type: Function as PropType<typeof itemRecipe>,
    },
    variant: {
      default: "default",
      type: String as PropType<ItemVariantProps["variant"]>,
    },
  },
  setup(props, { attrs, slots }) {
    const itemSlots = props.recipe();

    provideItemGroupContext(
      computed(() => ({
        variant: props.variant ?? "default",
      })),
    );

    return () =>
      h(
        ark.div as ArkPart,
        {
          ...attrs,
          class: cn(itemSlots.group(), props.class),
          "data-part": "group",
          "data-scope": "item",
          "data-variant": props.variant ?? "default",
          role: "list",
        },
        slots.default?.(),
      );
  },
});

export const ItemSeparator = defineComponent({
  inheritAttrs: false,
  name: "ItemSeparator",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    recipe: {
      default: itemRecipe,
      type: Function as PropType<typeof itemRecipe>,
    },
  },
  setup(props, { attrs }) {
    const itemSlots = props.recipe();

    return () =>
      h(Separator as ArkPart, {
        ...attrs,
        class: cn(itemSlots.separator(), props.class),
        dataPart: "separator",
        dataScope: "item",
        orientation: "horizontal",
      });
  },
});
// #endregion
