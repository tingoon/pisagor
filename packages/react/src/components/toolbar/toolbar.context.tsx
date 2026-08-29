import type { ToolbarSlots } from "@pisagor/recipes/toolbar";
import { createContext } from "../../internal/utils";

interface ToolbarContextValue {
  slots: ToolbarSlots;
}

export const { ToolbarContext, useToolbar } = createContext<ToolbarContextValue>()({
  name: "Toolbar",
});
