import { ark } from "@ark-ui/vue/factory";
import { type NavigationMenuSlots, navigationMenuVariants } from "@pisagor/recipes/navigation-menu";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType } from "vue";
import type { VariantClassNames } from "../../internal/types";

// #region Types
type NavigationMenuClassNames = VariantClassNames<NavigationMenuSlots>;
// #endregion

type ArkPart = Parameters<typeof h>[0];

// #region Parts
export const NavigationMenuRoot = defineComponent({
  inheritAttrs: false,
  name: "NavigationMenuRoot",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    classNames: { default: undefined, type: Object as PropType<NavigationMenuClassNames> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const slots$ = navigationMenuVariants();

      return h(
        ark.nav as ArkPart,
        {
          ...attrs,
          class: slots$.base({ class: cn(props.class, attrs.class) }),
          "data-part": "root",
          "data-scope": "navigation-menu",
        },
        slots,
      );
    };
  },
});

export const NavigationMenuList = defineComponent({
  inheritAttrs: false,
  name: "NavigationMenuList",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    classNames: { default: undefined, type: Object as PropType<NavigationMenuClassNames> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const slots$ = navigationMenuVariants();

      return h(
        ark.ul as ArkPart,
        {
          ...attrs,
          class: slots$.list({ class: cn(props.class, attrs.class, props.classNames?.list) }),
          "data-part": "list",
          "data-scope": "navigation-menu",
        },
        slots,
      );
    };
  },
});

export const NavigationMenuItem = defineComponent({
  inheritAttrs: false,
  name: "NavigationMenuItem",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    classNames: { default: undefined, type: Object as PropType<NavigationMenuClassNames> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const slots$ = navigationMenuVariants();

      return h(
        ark.li as ArkPart,
        {
          ...attrs,
          class: slots$.item({ class: cn(props.class, attrs.class, props.classNames?.item) }),
          "data-part": "item",
          "data-scope": "navigation-menu",
        },
        slots,
      );
    };
  },
});

export const NavigationMenuLink = defineComponent({
  inheritAttrs: false,
  name: "NavigationMenuLink",
  props: {
    active: { default: false, type: Boolean },
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    classNames: { default: undefined, type: Object as PropType<NavigationMenuClassNames> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const slots$ = navigationMenuVariants();

      return h(
        ark.a as ArkPart,
        {
          ...attrs,
          "aria-current": props.active ? "page" : undefined,
          class: slots$.link({ class: cn(props.class, attrs.class, props.classNames?.link) }),
          "data-active": props.active,
          "data-part": "link",
          "data-scope": "navigation-menu",
        },
        slots,
      );
    };
  },
});
// #endregion
