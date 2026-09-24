import type { ActionBarRecipe } from "@pisagor/recipes/action-bar";
import { createContext } from "../../utils/create-context";

interface ActionBarPositioning {
  gutter?: string;
  placement?: "bottom" | "bottom-start" | "bottom-end";
}

export interface ActionBarContextValue {
  isOpen?: boolean;
  lazyMount?: boolean;
  onClose?: () => void;
  onOpen?: () => void;
  positioning: ActionBarPositioning;
  slots: ActionBarRecipe;
  unmountOnExit?: boolean;
}

const ctx = createContext<ActionBarContextValue>({ name: "ActionBar" });
export const setActionBarContext = ctx.setContext;
export const useActionBar = ctx.getContext;
