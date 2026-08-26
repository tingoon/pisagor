import type { CommandVariants } from "@pisagor/styles/ui/command";
import { createContext } from "../../utils";

interface CommandContextValue {
  slots: CommandVariants;
}

export const { CommandContext, useCommand } = createContext<CommandContextValue>()({
  name: "Command",
});
