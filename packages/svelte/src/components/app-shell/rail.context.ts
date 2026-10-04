import { createContext } from "../../utils/create-context";
import type { AppShellRailState } from "./app-shell.context";

const ctx = createContext("AppShellRail")<AppShellRailState>();
export const setAppShellRailContext = ctx.setContext;
export const useAppShellRail = ctx.getContext;
