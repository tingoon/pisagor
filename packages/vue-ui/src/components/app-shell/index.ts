import {
  AppShellBanner,
  AppShellContent,
  AppShellHeader,
  AppShellInspector,
  AppShellInspectorContent,
  AppShellInspectorFooter,
  AppShellInspectorHeader,
  AppShellInspectorTrigger,
  AppShellMain,
  AppShellNavigation,
  AppShellPanel,
  AppShellPanelContent,
  AppShellPanelFooter,
  AppShellPanelHeader,
  AppShellPanelTrigger,
  AppShellRail,
  AppShellRailItem,
  AppShellRoot,
  AppShellSideTrigger,
} from "./app-shell";

export type {
  AppShellPlacement,
  AppShellRailState,
  AppShellRegionPosition,
  AppShellRegionVar,
  AppShellResizableProps,
  AppShellResizeHandlePosition,
  AppShellSideState,
} from "./app-shell";

export { useAppShell, useAppShellRail } from "./app-shell";

export const AppShell = Object.assign(AppShellRoot, {
  Banner: AppShellBanner,
  Content: AppShellContent,
  Header: AppShellHeader,
  Inspector: AppShellInspector,
  InspectorContent: AppShellInspectorContent,
  InspectorFooter: AppShellInspectorFooter,
  InspectorHeader: AppShellInspectorHeader,
  InspectorTrigger: AppShellInspectorTrigger,
  Main: AppShellMain,
  Navigation: AppShellNavigation,
  Panel: AppShellPanel,
  PanelContent: AppShellPanelContent,
  PanelFooter: AppShellPanelFooter,
  PanelHeader: AppShellPanelHeader,
  PanelTrigger: AppShellPanelTrigger,
  Rail: AppShellRail,
  RailItem: AppShellRailItem,
  SideTrigger: AppShellSideTrigger,
});
