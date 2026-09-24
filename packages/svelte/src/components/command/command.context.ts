import type { CommandRecipe } from "@pisagor/recipes/command";
import { createContext } from "../../utils/create-context";

interface CommandContextValue {
  slots: CommandRecipe;
}

export const { setContext: setCommandContext, getContext: useCommand } =
  createContext<CommandContextValue>({ name: "Command" });
