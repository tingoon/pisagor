import type { UseTourReturn } from "@ark-ui/react/tour";
import type { TourRecipe } from "@pisagor/recipes";

import { createContext } from "../../utils";

export interface TourProviderProps {
  /** The function to start the tour */
  handleStart: () => void;
  /** The tour instance */
  tour: UseTourReturn;
  /** Slot class recipes from `tourRecipe`. */
  slots: TourRecipe;
}

/** Returns the nearest tour context. */
export const { TourContext, useTour: useTourContext } =
  createContext("Tour")<TourProviderProps>();
