import type { UseTourReturn } from "@ark-ui/solid/tour";
import type { TourRecipe } from "@pisagor/recipes/tour";
import { createContext } from "../../utils";

export interface TourProviderProps {
  handleStart: () => void;
  tour: UseTourReturn;
  slots: TourRecipe;
}

export const { TourContext, useTour: useTourContext } = createContext<TourProviderProps>()({
  name: "Tour",
});
