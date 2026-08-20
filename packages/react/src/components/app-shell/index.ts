import { AppShellRoot } from "./app-shell";
import { AppShellBanner } from "./banner";
import {
  AppShellInspector,
  AppShellInspectorContent,
  AppShellInspectorFooter,
  AppShellInspectorHeader,
  AppShellInspectorTrigger,
} from "./inspector";
import { AppShellContent, AppShellHeader, AppShellMain } from "./main";
import { AppShellNavigation } from "./navigation";
import {
  AppShellPanel,
  AppShellPanelContent,
  AppShellPanelFooter,
  AppShellPanelHeader,
  AppShellPanelTrigger,
} from "./panel";
import { AppShellRail, AppShellRailItem } from "./rail";

export type { AppShellRootProps } from "./app-shell";
export type {
  AppShellPlacement,
  AppShellRailState,
  AppShellRegionPosition,
  AppShellRegionVar,
  AppShellResizableProps,
  AppShellResizeHandlePosition,
  AppShellSideState,
} from "./app-shell.context";
export { useAppShell } from "./app-shell.context";
export type { AppShellBannerProps } from "./banner";
export type {
  AppShellInspectorProps,
  AppShellInspectorTriggerProps,
} from "./inspector";
export type { AppShellHeaderProps } from "./main";
export type { AppShellNavigationProps } from "./navigation";
export type { AppShellPanelProps, AppShellPanelTriggerProps } from "./panel";
export type { AppShellRailItemProps, AppShellRailProps } from "./rail";
export { useAppShellRail } from "./rail.context";

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
});
