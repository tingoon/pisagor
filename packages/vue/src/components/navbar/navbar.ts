import { ark } from "@ark-ui/vue/factory";
import { type NavbarSlots, navbarVariants } from "@pisagor/styles/ui/navbar";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType } from "vue";
import type { VariantClassNames } from "../../internal/types";

// #region Types
type NavbarClassNames = VariantClassNames<NavbarSlots>;
// #endregion

type ArkPart = Parameters<typeof h>[0];

// #region Parts
export const NavbarRoot = defineComponent({
  inheritAttrs: false,
  name: "NavbarRoot",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    classNames: { default: undefined, type: Object as PropType<NavbarClassNames> },
    testId: String,
  },
  setup(props, { attrs, slots }) {
    return () => {
      const slots$ = navbarVariants();

      return h(
        ark.header as ArkPart,
        {
          ...attrs,
          class: slots$.base({ class: cn(props.class, attrs.class) }),
          "data-part": "root",
          "data-scope": "navbar",
          "data-testid": props.testId,
        },
        slots,
      );
    };
  },
});

export const NavbarBrand = defineComponent({
  inheritAttrs: false,
  name: "NavbarBrand",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    classNames: { default: undefined, type: Object as PropType<NavbarClassNames> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const slots$ = navbarVariants();

      return h(
        ark.div as ArkPart,
        {
          ...attrs,
          class: slots$.brand({ class: cn(props.class, attrs.class, props.classNames?.brand) }),
          "data-part": "brand",
          "data-scope": "navbar",
        },
        slots,
      );
    };
  },
});

export const NavbarContent = defineComponent({
  inheritAttrs: false,
  name: "NavbarContent",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    classNames: { default: undefined, type: Object as PropType<NavbarClassNames> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const slots$ = navbarVariants();

      return h(
        ark.div as ArkPart,
        {
          ...attrs,
          class: slots$.content({ class: cn(props.class, attrs.class, props.classNames?.content) }),
          "data-part": "content",
          "data-scope": "navbar",
        },
        slots,
      );
    };
  },
});

export const NavbarNav = defineComponent({
  inheritAttrs: false,
  name: "NavbarNav",
  props: {
    ariaLabel: { default: "Main", type: String },
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    classNames: { default: undefined, type: Object as PropType<NavbarClassNames> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const slots$ = navbarVariants();

      return h(
        ark.nav as ArkPart,
        {
          ...attrs,
          "aria-label": props.ariaLabel,
          class: slots$.nav({ class: cn(props.class, attrs.class, props.classNames?.nav) }),
          "data-part": "nav",
          "data-scope": "navbar",
        },
        slots,
      );
    };
  },
});

export const NavbarActions = defineComponent({
  inheritAttrs: false,
  name: "NavbarActions",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    classNames: { default: undefined, type: Object as PropType<NavbarClassNames> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const slots$ = navbarVariants();

      return h(
        ark.div as ArkPart,
        {
          ...attrs,
          class: slots$.actions({ class: cn(props.class, attrs.class, props.classNames?.actions) }),
          "data-part": "actions",
          "data-scope": "navbar",
        },
        slots,
      );
    };
  },
});
// #endregion
