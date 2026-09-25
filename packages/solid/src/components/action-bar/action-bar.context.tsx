import type { ActionBarRecipe } from "@pisagor/recipes/action-bar";
import type { Accessor } from "solid-js";
import { createContext } from "../../utils";

interface ActionBarPositioning {
  gutter?: string;
  placement?: "bottom" | "bottom-start" | "bottom-end";
}

export interface ActionBarContextValue {
  isOpen: Accessor<boolean>;
  lazyMount?: boolean;
  onClose: () => void;
  onOpen: () => void;
  positioning: ActionBarPositioning;
  slots: ActionBarRecipe;
  unmountOnExit?: boolean;
}

export const { ActionBarContext, useActionBar } = createContext<ActionBarContextValue>()({
  name: "ActionBar",
});
