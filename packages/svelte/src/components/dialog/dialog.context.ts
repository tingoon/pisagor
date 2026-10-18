import { dialogRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal";
import { createContext } from "../../utils/create-context";

export const { Context, useStyles, withContext, withProvider } =
  createSlotRecipeContext({
    name: "Dialog",
    recipe: dialogRecipe,
  });

const modalCtx = createContext("DialogModal")<boolean>();
export const setDialogModalContext = modalCtx.setContext;
export const useDialogModal = modalCtx.getContext;

/** Combined styles + modal (getter object — do not destructure once). */
export function useDialog() {
  const styles = useStyles();

  return {
    get modal() {
      return useDialogModal();
    },
    get slots() {
      return styles.slots;
    },
    get variants() {
      return styles.variants;
    },
  };
}

/** Compat: roots that still call setDialogContext({ modal, slots }). */
export function setDialogContext(value: {
  modal?: boolean;
  slots: ReturnType<typeof dialogRecipe>;
}) {
  Context.set({
    get slots() {
      return value.slots;
    },
  });
  if (value.modal !== undefined) setDialogModalContext(value.modal);
}
