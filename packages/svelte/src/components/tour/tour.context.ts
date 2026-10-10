import type { UseTourReturn } from "@ark-ui/svelte/tour";
import type { TourRecipe } from "@pisagor/recipes";
import { tourRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal/create-slot-recipe-context.svelte";
import { createContext } from "../../utils/create-context";

export const {
  Context,
  useStyles: useTourStyles,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "Tour",
  recipe: tourRecipe,
});

export interface TourStateValue {
  handleStart: () => void;
  tour: UseTourReturn;
}

const stateCtx = createContext("TourState")<TourStateValue>();
export const setTourStateContext = stateCtx.setContext;
export const useTourState = stateCtx.getContext;

export function useTourContext() {
  const styles = useTourStyles();
  const state = useTourState();
  return {
    get handleStart() {
      return state.handleStart;
    },
    get slots() {
      return styles.slots;
    },
    get tour() {
      return state.tour;
    },
    get variants() {
      return styles.variants;
    },
  };
}

export function setTourContext(value: TourStateValue & { slots: TourRecipe }) {
  Context.set({
    get slots() {
      return value.slots;
    },
  });
  setTourStateContext({
    get handleStart() {
      return value.handleStart;
    },
    get tour() {
      return value.tour;
    },
  });
}
