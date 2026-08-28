import type { ChartVariants } from "@pisagor/recipes/chart";
import { createContext } from "../internal/utils";
import type { ChartConfig } from "./chart";

interface ChartContextProps {
  config: ChartConfig;
  slots: ChartVariants;
}

export const { ChartContext, useChart } = createContext<ChartContextProps>()({
  name: "Chart",
});
