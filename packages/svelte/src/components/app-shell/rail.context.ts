import { createContext } from "../../utils/create-context";
import type { AppShellRailState } from "./app-shell.context";

const ctx = createContext<AppShellRailState>({ name: "AppShellRail" });
export const setAppShellRailContext = ctx.setContext;
export const useAppShellRail = ctx.getContext;
