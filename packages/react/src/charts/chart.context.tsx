import { createContext } from "../utils/create-context";
import type { ChartConfig } from "./chart";

interface ChartContextProps {
  config: ChartConfig;
}

export const { ChartContext, useChart } = createContext<ChartContextProps>()({
  name: "Chart",
});
