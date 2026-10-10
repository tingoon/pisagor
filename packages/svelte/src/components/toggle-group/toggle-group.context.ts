import type {
  ButtonVariantProps,
  ToggleGroupRecipe,
  ToggleVariantProps,
} from "@pisagor/recipes";
import { toggleGroupRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal/create-slot-recipe-context.svelte";
import { createContext } from "../../utils/create-context";

export const {
  Context,
  useStyles: useToggleGroupStyles,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "ToggleGroup",
  recipe: toggleGroupRecipe,
});

export interface ToggleGroupItemOptionsValue {
  size: NonNullable<ToggleVariantProps["size"]>;
  spacing: number;
  variant: Extract<ButtonVariantProps["variant"], "outline" | "ghost">;
}

const optionsCtx = createContext(
  "ToggleGroupItemOptions",
)<ToggleGroupItemOptionsValue>();
export const setToggleGroupItemOptionsContext = optionsCtx.setContext;
export const useToggleGroupItemOptions = optionsCtx.getContext;

export function useToggleGroup() {
  const styles = useToggleGroupStyles();
  const options = useToggleGroupItemOptions();
  return {
    get size() {
      return options.size;
    },
    get slots() {
      return styles.slots;
    },
    get spacing() {
      return options.spacing;
    },
    get variant() {
      return options.variant;
    },
    get variants() {
      return styles.variants;
    },
  };
}

export function setToggleGroupContext(
  value: ToggleGroupItemOptionsValue & { slots: ToggleGroupRecipe },
) {
  Context.set({
    get slots() {
      return value.slots;
    },
  });
  setToggleGroupItemOptionsContext({
    get size() {
      return value.size;
    },
    get spacing() {
      return value.spacing;
    },
    get variant() {
      return value.variant;
    },
  });
}
