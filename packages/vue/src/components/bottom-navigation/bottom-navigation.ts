import { ark } from "@ark-ui/vue/factory";
import { Tabs as TabsPrimitive } from "@ark-ui/vue/tabs";
import {
  bottomNavigationItemIconVariants,
  bottomNavigationItemLabelVariants,
  bottomNavigationItemVariants,
  bottomNavigationListVariants,
  bottomNavigationVariants,
} from "@pisagor/styles/ui/bottom-navigation";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType } from "vue";

type ArkPart = Parameters<typeof h>[0];

// #region Components
export const BottomNavigationRoot = defineComponent({
  inheritAttrs: false,
  name: "BottomNavigationRoot",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    testId: String,
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        TabsPrimitive.Root as ArkPart,
        {
          ...attrs,
          class: cn(bottomNavigationVariants(), props.class, attrs.class),
          "data-testid": props.testId,
        },
        slots,
      );
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
    return () =>
      h(
        TabsPrimitive.List as ArkPart,
        {
          ...attrs,
          "aria-label": props.ariaLabel ?? (attrs["aria-label"] as string | undefined),
          class: cn(bottomNavigationListVariants(), props.class, attrs.class),
        },
        slots,
      );
  },
});

export const BottomNavigationItem = defineComponent({
  inheritAttrs: false,
  name: "BottomNavigationItem",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        TabsPrimitive.Trigger as ArkPart,
        {
          ...attrs,
          class: cn(bottomNavigationItemVariants(), props.class, attrs.class),
        },
        slots,
      );
  },
});

export const BottomNavigationItemIcon = defineComponent({
  inheritAttrs: false,
  name: "BottomNavigationItemIcon",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        ark.span as ArkPart,
        {
          ...attrs,
          "aria-hidden": true,
          class: cn(bottomNavigationItemIconVariants(), props.class, attrs.class),
          "data-part": "item-icon",
          "data-scope": "bottom-navigation",
        },
        slots,
      );
  },
});

export const BottomNavigationItemLabel = defineComponent({
  inheritAttrs: false,
  name: "BottomNavigationItemLabel",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        ark.span as ArkPart,
        {
          ...attrs,
          class: cn(bottomNavigationItemLabelVariants(), props.class, attrs.class),
          "data-part": "item-label",
          "data-scope": "bottom-navigation",
        },
        slots,
      );
  },
});
// #endregion
