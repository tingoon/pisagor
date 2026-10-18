import { navigationMenuRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal";

export const {
  Context,
  useStyles: useNavigationMenu,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "NavigationMenu",
  recipe: navigationMenuRecipe,
});

import { getContext, setContext } from "svelte";

interface NavigationMenuOpenState {
  readonly openId: string | null;
  setOpenId: (id: string | null) => void;
}

export interface NavigationMenuItemState {
  readonly contentId: string;
  readonly open: boolean;
  setOpen: (open: boolean) => void;
  setTrigger: (element: HTMLElement | null) => void;
}

const OPEN_KEY = Symbol("NavigationMenuOpen");
const ITEM_KEY = Symbol("NavigationMenuItem");

export function setNavigationMenuOpenState(state: NavigationMenuOpenState) {
  setContext(OPEN_KEY, state);
}

export function useNavigationMenuOpenState(): NavigationMenuOpenState {
  return (
    getContext<NavigationMenuOpenState | undefined>(OPEN_KEY) ?? {
      openId: null,
      setOpenId: () => {},
    }
  );
}

export function setNavigationMenuItemState(state: NavigationMenuItemState) {
  setContext(ITEM_KEY, state);
}

export function useNavigationMenuItemState(
  part: string,
): NavigationMenuItemState {
  const item = getContext<NavigationMenuItemState | undefined>(ITEM_KEY);
  if (!item) {
    throw new Error(
      `NavigationMenu.${part} must be used in NavigationMenu.Item`,
    );
  }
  return item;
}
