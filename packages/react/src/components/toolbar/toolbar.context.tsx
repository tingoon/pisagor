import type { ToolbarVariants } from "@pisagor/styles/ui/toolbar";
import { createContext } from "../../utils";

interface ToolbarContextValue {
  slots: ToolbarVariants;
}

export const { ToolbarContext, useToolbar } = createContext<ToolbarContextValue>()({
  name: "Toolbar",
});
