import { createContext } from "../../utils";

const [DrawerContext, useDrawer] = createContext<{ testId?: string }>({
  name: "Drawer",
  strict: false,
});

export { DrawerContext, useDrawer };
