import { ark } from "@ark-ui/vue/factory";
import type {
  MenuItemProps as BaseMenuItemProps,
  MenuProps as BaseMenuRootProps,
} from "@pisagor/props";
import { menuItemRecipe, menuRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType } from "vue";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";

// #region Context
const {
  useStyles: useMenu,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "Menu",
  recipe: menuRecipe,
});
// #endregion

// #region Types
export interface MenuRootProps extends BaseMenuRootProps {
  class?: unknown;
}

export interface MenuItemProps extends BaseMenuItemProps {
  class?: unknown;
  type?: string;
}

export interface MenuLinkProps {
  active?: boolean;
  class?: unknown;
}
// #endregion

type ArkPart = Parameters<typeof h>[0];

// #region Parts
const MenuRootBase = withProvider(ark.nav, {
  defaultProps: { "aria-label": "Menu" },
  name: "Root",
  slot: "base",
});

export const MenuRoot = defineComponent({
  inheritAttrs: false,
  name: "Menu",
  setup(_, { attrs, slots }) {
    return () => h(MenuRootBase, { ...attrs }, slots);
  },
});

export const MenuList = withContext(ark.ul, {
  defaultProps: { role: "list" },
  name: "List",
});

export const MenuGroup = withContext(ark.div, {
  defaultProps: { role: "group" },
  name: "Group",
});

export const MenuGroupLabel = withContext(ark.div, {
  defaultProps: { "data-part": "group-label" },
  name: "GroupLabel",
  slot: "groupLabel",
});

export const MenuItem = defineComponent({
  inheritAttrs: false,
  name: "Menu.Item",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<unknown>,
    },
    recipe: {
      default: menuItemRecipe,
      type: Function as PropType<typeof menuItemRecipe>,
    },
    type: { default: "button", type: String },
    variant: {
      default: "default",
      type: String as PropType<"default" | "destructive">,
    },
  },
  setup(props, { attrs, slots: children }) {
    const styles = useMenu();

    return () =>
      h(
        ark.li as ArkPart,
        {
          class: styles.slots.wrapper(),
          "data-part": "item-wrapper",
          "data-scope": "menu",
          role: "none",
        },
        () =>
          h(
            ark.button as ArkPart,
            {
              ...attrs,
              class: cn(props.recipe({ variant: props.variant }), props.class),
              "data-part": "item",
              "data-scope": "menu",
              "data-variant": props.variant,
              type: props.type,
            },
            children,
          ),
      );
  },
});

export const MenuLink = defineComponent({
  inheritAttrs: false,
  name: "Menu.Link",
  props: {
    active: { default: false, type: Boolean },
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<unknown>,
    },
  },
  setup(props, { attrs, slots: children }) {
    const styles = useMenu();

    return () =>
      h(
        ark.li as ArkPart,
        {
          class: styles.slots.wrapper(),
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
              class: styles.slots.link({ class: cn(props.class) }),
              "data-active": props.active,
              "data-part": "link",
              "data-scope": "menu",
            },
            children,
          ),
      );
  },
});

export const MenuSeparator = withContext(ark.div, {
  defaultProps: { "aria-hidden": true, role: "separator" },
  name: "Separator",
});

export const MenuShortcut = withContext(ark.span, {
  name: "Shortcut",
});
// #endregion

export const Menu = Object.assign(MenuRoot, {
  Group: MenuGroup,
  GroupLabel: MenuGroupLabel,
  Item: MenuItem,
  Link: MenuLink,
  List: MenuList,
  Root: MenuRoot,
  Separator: MenuSeparator,
  Shortcut: MenuShortcut,
});
