import type { UseTourReturn } from "@ark-ui/react/tour";
import type { TourVariants } from "@pisagor/recipes/tour";
import { createContext } from "../../internal/utils";

export interface TourProviderProps {
  /** The function to start the tour */
  handleStart: () => void;
  /** The tour instance */
  tour: UseTourReturn;
  /** Slot class recipes from `tourVariants`. */
  slots: TourVariants;
}

/** Returns the nearest tour context. */
export const { TourContext, useTour: useTourContext } = createContext<TourProviderProps>()({
  name: "Tour",
});
