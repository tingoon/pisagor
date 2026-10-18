import { alertDialogRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal";
import { createContext } from "../../utils/create-context";

export const { Context, useStyles, withContext, withProvider } =
  createSlotRecipeContext({
    name: "AlertDialog",
    recipe: alertDialogRecipe,
  });

const modalCtx = createContext("AlertDialogModal")<boolean>();
export const setAlertDialogModalContext = modalCtx.setContext;
export const useAlertDialogModal = modalCtx.getContext;

/** Combined styles + modal (getter object — do not destructure once). */
export function useAlertDialog() {
  const styles = useStyles();

  return {
    get modal() {
      return useAlertDialogModal();
    },
    get slots() {
      return styles.slots;
    },
    get variants() {
      return styles.variants;
    },
  };
}

/** Compat for roots that call setAlertDialogContext({ modal, slots }). */
export function setAlertDialogContext(value: {
  modal?: boolean;
  slots: ReturnType<typeof alertDialogRecipe>;
}) {
  Context.set({
    get slots() {
      return value.slots;
    },
  });
  if (value.modal !== undefined) setAlertDialogModalContext(value.modal);
}
