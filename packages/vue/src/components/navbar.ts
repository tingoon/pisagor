import type { NavbarProps as BaseNavbarRootProps } from "@pisagor/props";
import { type NavbarRecipeSlot, navbarRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType } from "vue";
import {
  type ClassValue,
  type VariantClassNames,
  createSlotRecipeContext,
} from "../internal";
import { useLocale } from "./provider/context";

// #region Slot recipe context
const { useStyles, withContext, withProvider } = createSlotRecipeContext({
  name: "Navbar",
  recipe: navbarRecipe,
});
// #endregion

// #region Types
type NavbarClassNames = VariantClassNames<NavbarRecipeSlot>;

export interface NavbarRootProps extends BaseNavbarRootProps {
  class?: unknown;
}
// #endregion

// #region Parts
export const NavbarRoot = withProvider("header", {
  name: "Root",
  slot: "base",
});

export const NavbarBrand = withContext("div", {
  name: "Brand",
});

export const NavbarContent = withContext("div", {
  name: "Content",
});

export const NavbarNav = defineComponent({
  inheritAttrs: false,
  name: "NavbarNav",
  props: {
    ariaLabel: { default: undefined, type: String },
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
    classNames: {
      default: undefined,
      type: Object as PropType<NavbarClassNames>,
    },
  },
  setup(props, { attrs, slots }) {
    const { m } = useLocale();
    const styles = useStyles();

    return () => {
      const slots$ = styles.slots;

      return h(
        "nav",
        {
          ...attrs,
          "aria-label": m("navbar.label", props.ariaLabel),
          class: slots$.nav({
            class: cn(props.class, attrs.class, props.classNames?.nav),
          }),
          "data-part": "nav",
          "data-scope": "navbar",
        },
        slots,
      );
    };
  },
});

export const NavbarActions = withContext("div", {
  name: "Actions",
});
// #endregion

export const Navbar = Object.assign(NavbarRoot, {
  Actions: NavbarActions,
  Brand: NavbarBrand,
  Content: NavbarContent,
  Nav: NavbarNav,
  Root: NavbarRoot,
});
