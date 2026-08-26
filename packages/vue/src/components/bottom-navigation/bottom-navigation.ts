import { ark } from "@ark-ui/vue/factory";
import { Tabs as TabsPrimitive } from "@ark-ui/vue/tabs";
import { bottomNavigationVariants } from "@pisagor/styles/ui/bottom-navigation";
import { defineComponent, h, type PropType } from "vue";

type ArkPart = Parameters<typeof h>[0];

// #region Parts
export const BottomNavigationRoot = defineComponent({
  inheritAttrs: false,
  name: "BottomNavigationRoot",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    testId: String,
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = bottomNavigationVariants();

      return h(
        TabsPrimitive.Root as ArkPart,
        {
          ...attrs,
          class: variantSlots.base({ class: props.class }),
          "data-testid": props.testId,
        },
        slots,
      );
    };
  },
});

export const BottomNavigationList = defineComponent({
  inheritAttrs: false,
  name: "BottomNavigationList",
  props: {
    ariaLabel: { default: undefined, type: String },
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = bottomNavigationVariants();

      return h(
        TabsPrimitive.List as ArkPart,
        {
          ...attrs,
          "aria-label": props.ariaLabel ?? (attrs["aria-label"] as string | undefined),
          class: variantSlots.list({ class: props.class }),
        },
        slots,
      );
    };
  },
});

export const BottomNavigationItem = defineComponent({
  inheritAttrs: false,
  name: "BottomNavigationItem",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = bottomNavigationVariants();

      return h(
        TabsPrimitive.Trigger as ArkPart,
        {
          ...attrs,
          class: variantSlots.item({ class: props.class }),
        },
        slots,
      );
    };
  },
});

export const BottomNavigationItemIcon = defineComponent({
  inheritAttrs: false,
  name: "BottomNavigationItemIcon",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = bottomNavigationVariants();

      return h(
        ark.span as ArkPart,
        {
          ...attrs,
          "aria-hidden": true,
          class: variantSlots.itemIcon({ class: props.class }),
          "data-part": "item-icon",
          "data-scope": "bottom-navigation",
        },
        slots,
      );
    };
  },
});

export const BottomNavigationItemLabel = defineComponent({
  inheritAttrs: false,
  name: "BottomNavigationItemLabel",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = bottomNavigationVariants();

      return h(
        ark.span as ArkPart,
        {
          ...attrs,
          class: variantSlots.itemLabel({ class: props.class }),
          "data-part": "item-label",
          "data-scope": "bottom-navigation",
        },
        slots,
      );
    };
  },
});
// #endregion
