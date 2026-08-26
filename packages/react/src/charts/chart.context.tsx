import type { ChartVariants } from "@pisagor/recipes/chart";
import { createContext } from "../utils/create-context";
import type { ChartConfig } from "./chart";

interface ChartContextProps {
  config: ChartConfig;
  slots: ChartVariants;
}

export const { ChartContext, useChart } = createContext<ChartContextProps>()({
  name: "Chart",
});
