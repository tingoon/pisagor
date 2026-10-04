import type { UseTourReturn } from "@ark-ui/solid/tour";
import type { TourRecipe } from "@pisagor/recipes";
import { createContext } from "../../utils";

export interface TourProviderProps {
  handleStart: () => void;
  tour: UseTourReturn;
  slots: TourRecipe;
}

export const { TourContext, useTour: useTourContext } =
  createContext("Tour")<TourProviderProps>();
