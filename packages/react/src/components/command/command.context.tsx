import type { CommandSlots } from "@pisagor/recipes/command";
import { createContext } from "../../internal/utils";

interface CommandContextValue {
  slots: CommandSlots;
}

export const { CommandContext, useCommand } = createContext<CommandContextValue>()({
  name: "Command",
});
