import type { ToolbarVariants } from "@pisagor/recipes/toolbar";
import { createContext } from "../../internal/utils";

interface ToolbarContextValue {
  slots: ToolbarVariants;
}

export const { ToolbarContext, useToolbar } = createContext<ToolbarContextValue>()({
  name: "Toolbar",
});
