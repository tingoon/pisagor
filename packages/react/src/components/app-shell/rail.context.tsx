import { createContext } from "../../utils";
import type { AppShellRailState } from "./app-shell.context";

export const { AppShellRailContext, useAppShellRail } =
  createContext("AppShellRail")<AppShellRailState>();
