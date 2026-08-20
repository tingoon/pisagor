import type { UseTourReturn } from "@ark-ui/react/tour";
import { createContext } from "../../utils";

export interface TourProviderProps {
  /** The function to start the tour */
  handleStart: () => void;
  /** The tour instance */
  tour: UseTourReturn;
  testId?: string;
}

/** Returns the nearest tour context. */
const [TourContext, useTourContext] = createContext<TourProviderProps>({
  name: "Tour",
});

export { TourContext, useTourContext };
