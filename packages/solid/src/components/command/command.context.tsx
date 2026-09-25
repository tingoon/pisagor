import type { CommandRecipe } from "@pisagor/recipes/command";
import { createContext } from "../../utils";

interface CommandContextValue {
  slots: CommandRecipe;
}

export const { CommandContext, useCommand } = createContext<CommandContextValue>()({
  name: "Command",
});
