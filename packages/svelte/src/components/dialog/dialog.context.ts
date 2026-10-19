import { dialogRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal";

export const { Context, useStyles, withContext, withProvider } =
  createSlotRecipeContext({
    name: "Dialog",
    recipe: dialogRecipe,
  });

/** Dialog styles (getter object — do not destructure once). */
export function useDialog() {
  const styles = useStyles();

  return {
    get slots() {
      return styles.slots;
    },
    get variants() {
      return styles.variants;
    },
  };
}
