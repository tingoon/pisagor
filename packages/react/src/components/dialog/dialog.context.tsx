import type { DialogVariants } from "@pisagor/recipes/dialog";
import { createContext } from "../../utils";

interface DialogContextValue {
  /**
   * Used internally to show or hide the overlay.
   *
   * @defaultValue true
   *
   * @remarks
   * When `false`, the overlay is not rendered and content outside the dialog stays interactable.
   */
  modal?: boolean;
  /** Slot class recipes from `dialogVariants`. */
  slots: DialogVariants;
}

export const { DialogContext, useDialog } = createContext<DialogContextValue>()({
  name: "Dialog",
});
