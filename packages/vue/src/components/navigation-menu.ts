import { ark } from "@ark-ui/vue/factory";
import type { NavigationMenuProps as BaseNavigationMenuRootProps } from "@pisagor/props";
import {
  type NavigationMenuRecipeSlot,
  navigationMenuRecipe,
} from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType } from "vue";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";
import type { VariantClassNames } from "../internal/types";

// #region Slot recipe context
const {
  useStyles: useNavigationMenu,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "NavigationMenu",
  recipe: navigationMenuRecipe,
});
// #endregion

// #region Types
type NavigationMenuClassNames = VariantClassNames<NavigationMenuRecipeSlot>;

export interface NavigationMenuRootProps extends BaseNavigationMenuRootProps {
  class?: unknown;
}
// #endregion

type ArkPart = Parameters<typeof h>[0];

// #region Parts
export const NavigationMenuRoot = withProvider(ark.nav, {
  name: "Root",
  slot: "base",
});

export const NavigationMenuList = withContext(ark.ul, {
  name: "List",
});

export const NavigationMenuItem = withContext(ark.li, {
  name: "Item",
});

export const NavigationMenuLink = defineComponent({
  inheritAttrs: false,
  name: "NavigationMenuLink",
  props: {
    active: { default: false, type: Boolean },
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<unknown>,
    },
    classNames: {
      default: undefined,
      type: Object as PropType<NavigationMenuClassNames>,
    },
  },
  setup(props, { attrs, slots }) {
    const styles = useNavigationMenu();

    return () => {
      const slots$ = styles.slots;

      return h(
        ark.a as ArkPart,
        {
          ...attrs,
          "aria-current": props.active ? "page" : undefined,
          class: slots$.link({
            class: cn(props.class, attrs.class, props.classNames?.link),
          }),
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

export const NavigationMenu = Object.assign(NavigationMenuRoot, {
  Item: NavigationMenuItem,
  Link: NavigationMenuLink,
  List: NavigationMenuList,
});
