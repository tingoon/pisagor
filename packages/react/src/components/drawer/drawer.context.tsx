import { createContext } from "../../utils";

export const { DrawerContext, useDrawer } = createContext<{ testId?: string }>()({
  name: "Drawer",
  strict: false,
});
