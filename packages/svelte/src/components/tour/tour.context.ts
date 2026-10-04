import type { UseTourReturn } from "@ark-ui/svelte/tour";
import type { TourRecipe } from "@pisagor/recipes";
import { createContext } from "../../utils/create-context";

export interface TourProviderProps {
  handleStart: () => void;
  slots: TourRecipe;
  tour: UseTourReturn;
}

const ctx = createContext("Tour")<TourProviderProps>();
export const setTourContext = ctx.setContext;
export const useTourContext = ctx.getContext;
