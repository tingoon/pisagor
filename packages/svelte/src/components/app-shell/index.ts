import AppShellBanner from "./app-shell-banner.svelte";
import AppShellContent from "./app-shell-content.svelte";
import AppShellHeader from "./app-shell-header.svelte";
import AppShellInspector from "./app-shell-inspector.svelte";
import AppShellInspectorContent from "./app-shell-inspector-content.svelte";
import AppShellInspectorFooter from "./app-shell-inspector-footer.svelte";
import AppShellInspectorHeader from "./app-shell-inspector-header.svelte";
import AppShellInspectorTrigger from "./app-shell-inspector-trigger.svelte";
import AppShellMain from "./app-shell-main.svelte";
import AppShellNavigation from "./app-shell-navigation.svelte";
import AppShellPanel from "./app-shell-panel.svelte";
import AppShellPanelContent from "./app-shell-panel-content.svelte";
import AppShellPanelFooter from "./app-shell-panel-footer.svelte";
import AppShellPanelHeader from "./app-shell-panel-header.svelte";
import AppShellPanelTrigger from "./app-shell-panel-trigger.svelte";
import AppShellRail from "./app-shell-rail.svelte";
import AppShellRailItem from "./app-shell-rail-item.svelte";
import AppShellRoot from "./app-shell-root.svelte";

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
