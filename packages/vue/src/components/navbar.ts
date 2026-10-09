import { ark } from "@ark-ui/vue/factory";
import type { NavbarProps as BaseNavbarRootProps } from "@pisagor/props";
import { type NavbarRecipeSlot, navbarRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType } from "vue";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";
import type { VariantClassNames } from "../internal/types";

// #region Slot recipe context
const {
  useStyles: useNavbarStyles,
  withContext,
  withProvider,
} = createSlotRecipeContext({
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

type ArkPart = Parameters<typeof h>[0];

// #region Parts
export const NavbarRoot = withProvider(ark.header, {
  name: "Root",
  slot: "base",
});

export const NavbarBrand = withContext(ark.div, {
  name: "Brand",
});

export const NavbarContent = withContext(ark.div, {
  name: "Content",
});

export const NavbarNav = defineComponent({
  inheritAttrs: false,
  name: "NavbarNav",
  props: {
    ariaLabel: { default: "Main", type: String },
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<unknown>,
    },
    classNames: {
      default: undefined,
      type: Object as PropType<NavbarClassNames>,
    },
  },
  setup(props, { attrs, slots }) {
    const styles = useNavbarStyles();

    return () => {
      const slots$ = styles.slots;

      return h(
        ark.nav as ArkPart,
        {
          ...attrs,
          "aria-label": props.ariaLabel,
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

export const NavbarActions = withContext(ark.div, {
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
