import type { CommandRecipe } from "@pisagor/recipes";
import { createContext } from "../../utils";

interface CommandContextValue {
  slots: CommandRecipe;
}

export const { CommandContext, useCommand } =
  createContext("Command")<CommandContextValue>();
