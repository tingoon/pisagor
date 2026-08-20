import type { WithTestId } from "../../internal/types";
import { createContext } from "../../utils";

interface ActionBarPositioning {
  /**
   * The gutter from the edge in pixels.
   *
   * @defaultValue '16px'
   */
  gutter?: string;
  /**
   * The placement of the action bar.
   *
   * @defaultValue "bottom"
   */
  placement?: "bottom" | "bottom-start" | "bottom-end";
}

export interface ActionBarContextValue extends WithTestId {
  /** The open state of the action bar */
  isOpen?: boolean;
  /** Whether to lazy mount the action bar */
  lazyMount?: boolean;
  /** The function to call when the action bar is closed */
  onClose?: () => void;
  /** The function to call when the action bar is opened */
  onOpen?: () => void;
  /** The positioning of the action bar. */
  positioning: ActionBarPositioning;
  /** The function to call when the action bar is mounted */
  unmountOnExit?: boolean;
}

/**
 * Returns the nearest action bar context.
 */
const [ActionBarContext, useActionBar] = createContext<ActionBarContextValue>({
  name: "ActionBar",
});

export { ActionBarContext, useActionBar };
