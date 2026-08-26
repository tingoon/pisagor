import { createContext } from "../../utils";

interface DialogContextProps {
  /**
   * Used internally to show or hide the overlay.
   *
   * @defaultValue true
   *
   * @remarks
   * When `false`, the overlay is not rendered and content outside the dialog stays interactable.
   */
  modal?: boolean;
}

export const { DialogContext, useDialog } = createContext<DialogContextProps>()({
  name: "Dialog",
});
