import type { DatePickerRecipe } from "@pisagor/recipes";
import { datePickerRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal/create-slot-recipe-context.svelte";
import { createContext } from "../../utils/create-context";

export const {
  Context,
  useStyles: useDatePickerStyles,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "DatePicker",
  recipe: datePickerRecipe,
});

type FormControlVariant = "primary" | "secondary";

const variantCtx = createContext("DatePickerVariant")<
  FormControlVariant | undefined
>({
  defaultValue: undefined,
  strict: false,
});
export const setDatePickerVariantContext = variantCtx.setContext;
export const useDatePickerVariant = variantCtx.getContext;

export function useDatePicker() {
  const styles = Context.get();
  if (!styles) return undefined;
  return {
    get slots() {
      return styles.slots;
    },
    get variant() {
      return useDatePickerVariant();
    },
    get variants() {
      return styles.variants;
    },
  };
}

export function setDatePickerSlotsContext(value: {
  slots: DatePickerRecipe;
  variant?: FormControlVariant;
}) {
  Context.set({
    get slots() {
      return value.slots;
    },
  });
  setDatePickerVariantContext(value.variant);
}
