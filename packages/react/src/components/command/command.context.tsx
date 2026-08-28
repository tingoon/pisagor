import type { CommandVariants } from "@pisagor/recipes/command";
import { createContext } from "../../internal/utils";

interface CommandContextValue {
  slots: CommandVariants;
}

export const { CommandContext, useCommand } = createContext<CommandContextValue>()({
  name: "Command",
});
