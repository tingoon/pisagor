import { createContext } from "../../internal/utils";
import type { AppShellRailState } from "./app-shell.context";

export const { AppShellRailContext, useAppShellRail } = createContext<AppShellRailState>()({
  name: "AppShellRail",
});
