import type { ActionBarRecipe } from "@pisagor/recipes";
import { actionBarRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal/create-slot-recipe-context.svelte";
import { createContext } from "../../utils/create-context";

export const {
  Context,
  useStyles: useActionBarStyles,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "ActionBar",
  recipe: actionBarRecipe,
});

interface ActionBarPositioning {
  gutter?: string;
  placement?: "bottom" | "bottom-start" | "bottom-end";
}

export interface ActionBarStateValue {
  isOpen?: boolean;
  lazyMount?: boolean;
  onClose?: () => void;
  onOpen?: () => void;
  positioning: ActionBarPositioning;
  unmountOnExit?: boolean;
}

const stateCtx = createContext("ActionBarState")<ActionBarStateValue>();
export const setActionBarStateContext = stateCtx.setContext;
export const useActionBarState = stateCtx.getContext;

export function useActionBar() {
  const styles = useActionBarStyles();
  const state = useActionBarState();
  return {
    get isOpen() {
      return state.isOpen;
    },
    get lazyMount() {
      return state.lazyMount;
    },
    get onClose() {
      return state.onClose;
    },
    get onOpen() {
      return state.onOpen;
    },
    get positioning() {
      return state.positioning;
    },
    get slots() {
      return styles.slots;
    },
    get unmountOnExit() {
      return state.unmountOnExit;
    },
    get variants() {
      return styles.variants;
    },
  };
}

export function setActionBarContext(
  value: ActionBarStateValue & {
    slots: ActionBarRecipe;
  },
) {
  Context.set({
    get slots() {
      return value.slots;
    },
    get variants() {
      return { placement: value.positioning.placement };
    },
  });
  setActionBarStateContext({
    get isOpen() {
      return value.isOpen;
    },
    get lazyMount() {
      return value.lazyMount;
    },
    get onClose() {
      return value.onClose;
    },
    get onOpen() {
      return value.onOpen;
    },
    get positioning() {
      return value.positioning;
    },
    get unmountOnExit() {
      return value.unmountOnExit;
    },
  });
}
