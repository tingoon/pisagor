import { ark } from "@ark-ui/vue/factory";
import {
  menuItemVariants,
  menuItemWrapper2Variants,
  menuItemWrapperVariants,
  menuVariants,
} from "@pisagor/styles/ui/menu";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType } from "vue";
import type { VariantClassNames, WithTestId } from "../../internal/types";

// #region Types
type MenuClassNames = VariantClassNames<typeof menuVariants>;

export interface MenuRootProps extends WithTestId {
  /** Slot class names */
  classNames?: MenuClassNames;
}
// #endregion

type ArkPart = Parameters<typeof h>[0];

// #region Components
export const MenuRoot = defineComponent({
  inheritAttrs: false,
  name: "MenuRoot",
  props: {
    classNames: { default: undefined, type: Object as PropType<MenuClassNames> },
    testId: String,
  },
  setup(props, { attrs, slots }) {
    return () => {
      const slots$ = menuVariants();
      const ariaLabel = (attrs["aria-label"] as string | undefined) ?? "Menu";

      return h(
        ark.nav as ArkPart,
        {
          ...attrs,
          "aria-label": ariaLabel,
          class: cn(slots$.root(), attrs.class, props.classNames?.root),
          "data-part": "root",
          "data-scope": "menu",
          "data-testid": props.testId,
        },
        slots,
      );
    };
  },
});

export const MenuList = defineComponent({
  inheritAttrs: false,
  name: "MenuList",
  props: {
    classNames: { default: undefined, type: Object as PropType<MenuClassNames> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const slots$ = menuVariants();

      return h(
        ark.ul as ArkPart,
        {
          ...attrs,
          class: cn(slots$.list(), attrs.class, props.classNames?.list),
          "data-part": "list",
          "data-scope": "menu",
          role: "list",
        },
        slots,
      );
    };
  },
});

export const MenuGroup = defineComponent({
  inheritAttrs: false,
  name: "MenuGroup",
  props: {
    classNames: { default: undefined, type: Object as PropType<MenuClassNames> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const slots$ = menuVariants();

      return h(
        ark.div as ArkPart,
        {
          ...attrs,
          class: cn(slots$.group(), attrs.class, props.classNames?.group),
          "data-part": "group",
          "data-scope": "menu",
          role: "group",
        },
        slots,
      );
    };
  },
});

export const MenuGroupLabel = defineComponent({
  inheritAttrs: false,
  name: "MenuGroupLabel",
  props: {
    classNames: { default: undefined, type: Object as PropType<MenuClassNames> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const slots$ = menuVariants();

      return h(
        ark.div as ArkPart,
        {
          ...attrs,
          class: cn(slots$.groupLabel(), attrs.class, props.classNames?.groupLabel),
          "data-part": "group-label",
          "data-scope": "menu",
        },
        slots,
      );
    };
  },
});

export const MenuItem = defineComponent({
  inheritAttrs: false,
  name: "MenuItem",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    classNames: { default: undefined, type: Object as PropType<MenuClassNames> },
    type: { default: "button", type: String },
    variant: { default: "default", type: String as PropType<"default" | "destructive"> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        ark.li as ArkPart,
        {
          class: menuItemWrapperVariants(),
          "data-part": "item-wrapper",
          "data-scope": "menu",
          role: "none",
        },
        () =>
          h(
            ark.button as ArkPart,
            {
              ...attrs,
              class: cn(
                menuItemVariants({ variant: props.variant }),
                props.class,
                props.classNames?.item,
              ),
              "data-part": "item",
              "data-scope": "menu",
              "data-variant": props.variant,
              type: props.type,
            },
            slots,
          ),
      );
  },
});

export const MenuLink = defineComponent({
  inheritAttrs: false,
  name: "MenuLink",
  props: {
    active: { default: false, type: Boolean },
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    classNames: { default: undefined, type: Object as PropType<MenuClassNames> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const slots$ = menuVariants();

      return h(
        ark.li as ArkPart,
        {
          class: menuItemWrapper2Variants(),
          "data-part": "item-wrapper",
          "data-scope": "menu",
          role: "none",
        },
        () =>
          h(
            ark.a as ArkPart,
            {
              ...attrs,
              "aria-current": props.active ? "page" : undefined,
              class: cn(slots$.link(), props.class, props.classNames?.link),
              "data-active": props.active,
              "data-part": "link",
              "data-scope": "menu",
            },
            slots,
          ),
      );
    };
  },
});

export const MenuSeparator = defineComponent({
  inheritAttrs: false,
  name: "MenuSeparator",
  props: {
    classNames: { default: undefined, type: Object as PropType<MenuClassNames> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const slots$ = menuVariants();

      return h(
        ark.div as ArkPart,
        {
          ...attrs,
          "aria-hidden": true,
          class: cn(slots$.separator(), attrs.class, props.classNames?.separator),
          "data-part": "separator",
          "data-scope": "menu",
          role: "separator",
        },
        slots,
      );
    };
  },
});

export const MenuShortcut = defineComponent({
  inheritAttrs: false,
  name: "MenuShortcut",
  props: {
    classNames: { default: undefined, type: Object as PropType<MenuClassNames> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const slots$ = menuVariants();

      return h(
        ark.span as ArkPart,
        {
          ...attrs,
          class: cn(slots$.shortcut(), attrs.class, props.classNames?.shortcut),
          "data-part": "shortcut",
          "data-scope": "menu",
        },
        slots,
      );
    };
  },
});
// #endregion
