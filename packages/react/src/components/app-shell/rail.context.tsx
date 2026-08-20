import { createContext } from "../../utils";
import type { AppShellRailState } from "./app-shell.context";

const [AppShellRailContext, useAppShellRail] = createContext<AppShellRailState>({
  name: "AppShellRail",
});

export { AppShellRailContext, useAppShellRail };
