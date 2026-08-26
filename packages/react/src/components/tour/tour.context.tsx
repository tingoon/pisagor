import type { UseTourReturn } from "@ark-ui/react/tour";
import type { TourVariants } from "@pisagor/styles/ui/tour";
import { createContext } from "../../utils";

export interface TourProviderProps {
  /** The function to start the tour */
  handleStart: () => void;
  /** Slot class recipes from `tourVariants`. */
  slots: TourVariants;
  /** The tour instance */
  tour: UseTourReturn;
  testId?: string;
}

/** Returns the nearest tour context. */
export const { TourContext, useTour: useTourContext } = createContext<TourProviderProps>()({
  name: "Tour",
});
