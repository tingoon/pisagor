import { createContext } from "@pisagor/react/utils";
import type { ChartRecipe } from "@pisagor/recipes/chart";
import type { ChartConfig } from "./chart";

interface ChartContextProps {
  config: ChartConfig;
  slots: ChartRecipe;
}

export const { ChartContext, useChart } = createContext<ChartContextProps>()({
  name: "Chart",
});
