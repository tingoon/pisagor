import { appShellVariants } from "@pisagor/recipes/app-shell";
import { useHotkey } from "@tanstack/react-hotkeys";
import { type ComponentProps, useCallback, useMemo, useRef, useState } from "react";
import {
  APP_SHELL_DEFAULT_INSPECTOR_RESIZABLE_PROPS,
  APP_SHELL_DEFAULT_PANEL_RESIZABLE_PROPS,
  AppShellContext,
  type AppShellFixedStackVar,
  type AppShellPlacement,
  type AppShellRailState,
  type AppShellRegionVar,
  type AppShellSideState,
  ZERO_FIXED_STACK_VARS,
  ZERO_REGION_VARS,
} from "./app-shell.context";
import { type AppShellSlots, partitionAppShellChildren } from "./slots";

const APP_SHELL_GRID_COLUMNS = `
  var(--app-shell-start-inspector-width, 0px)
  var(--app-shell-start-rail-width, 0px)
  var(--app-shell-start-panel-width, 0px)
  minmax(0, 1fr)
  var(--app-shell-end-panel-width, 0px)
  var(--app-shell-end-rail-width, 0px)
  var(--app-shell-end-inspector-width, 0px)
`;

const APP_SHELL_CONTENT_ROW =
  '"start-inspector start-rail start-panel main end-panel end-rail end-inspector"';

const APP_SHELL_NAV_ROW =
  '"start-inspector navigation navigation navigation navigation navigation end-inspector"';

const APP_SHELL_BANNER_ROW = '"banner banner banner banner banner banner banner"';

function buildGridAreas(hasBanner: boolean, hasNavigation: boolean) {
  if (hasBanner && hasNavigation) {
    return `${APP_SHELL_BANNER_ROW}\n${APP_SHELL_NAV_ROW}\n${APP_SHELL_CONTENT_ROW}`;
  }

  if (hasBanner) {
    return `${APP_SHELL_BANNER_ROW}\n${APP_SHELL_CONTENT_ROW}`;
  }

  if (hasNavigation) {
    return `${APP_SHELL_NAV_ROW}\n${APP_SHELL_CONTENT_ROW}`;
  }

  return APP_SHELL_CONTENT_ROW;
}

function buildGridRows(hasBanner: boolean, hasNavigation: boolean) {
  return [...(hasBanner ? ["auto"] : []), ...(hasNavigation ? ["auto"] : []), "auto"].join(" ");
}

export type AppShellRootProps = ComponentProps<"div">;

function useShellGridStyle(childSlots: AppShellSlots) {
  const hasBanner = Boolean(childSlots.banner);
  const hasNavigation = Boolean(childSlots.navigation);

  return useMemo(
    () => ({
      gridTemplateAreas: buildGridAreas(hasBanner, hasNavigation),
      gridTemplateColumns: APP_SHELL_GRID_COLUMNS,
      gridTemplateRows: buildGridRows(hasBanner, hasNavigation),
    }),
    [hasBanner, hasNavigation],
  );
}

export function AppShellRoot({ children, className, style, ...rest }: AppShellRootProps) {
  const childSlots = useMemo(() => partitionAppShellChildren(children), [children]);
  const slots = useMemo(() => appShellVariants(), []);
  const [regionRevision, setRegionRevision] = useState(0);
  const [regionVars, setRegionVars] = useState(ZERO_REGION_VARS);
  const [fixedStackVars, setFixedStackVars] = useState(ZERO_FIXED_STACK_VARS);
  const panelStates = useRef<Partial<Record<AppShellPlacement, AppShellSideState>>>({});
  const inspectorStates = useRef<Partial<Record<AppShellPlacement, AppShellSideState>>>({});
  const railStates = useRef<Partial<Record<AppShellPlacement, AppShellRailState>>>({});
  const shellRef = useRef<HTMLDivElement>(null);
  const [regionResizing, setRegionResizing] = useState(false);
  const gridStyle = useShellGridStyle(childSlots);

  const setRegionVar = useCallback((name: AppShellRegionVar, value: string) => {
    setRegionVars((current) => {
      if (current[name] === value) {
        return current;
      }
      return { ...current, [name]: value };
    });
  }, []);

  const setFixedStackVar = useCallback((name: AppShellFixedStackVar, value: string) => {
    setFixedStackVars((current) => {
      if (current[name] === value) {
        return current;
      }
      return { ...current, [name]: value };
    });
  }, []);

  useHotkey("Mod+\\", () => {
    panelStates.current.start?.toggle();
  });

  const notifyRegionChange = useCallback(() => {
    setRegionRevision((revision) => revision + 1);
  }, []);

  const contextValue = useMemo(
    () => ({
      defaultInspectorResizableProps: APP_SHELL_DEFAULT_INSPECTOR_RESIZABLE_PROPS,
      defaultPanelResizableProps: APP_SHELL_DEFAULT_PANEL_RESIZABLE_PROPS,
      fixedStackVars,
      inspectorStates,
      notifyRegionChange,
      panelStates,
      railStates,
      regionResizing,
      regionRevision,
      regionVars,
      setFixedStackVar,
      setRegionResizing,
      setRegionVar,
      shellRef,
      slots,
    }),
    [
      fixedStackVars,
      notifyRegionChange,
      regionResizing,
      regionRevision,
      regionVars,
      setFixedStackVar,
      setRegionVar,
      slots,
    ],
  );

  const shellStyle = useMemo(
    () => ({
      ...regionVars,
      ...fixedStackVars,
    }),
    [fixedStackVars, regionVars],
  );

  return (
    <AppShellContext value={contextValue}>
      <div
        {...rest}
        className={slots.base({ className })}
        data-part="root"
        data-resizing={regionResizing ? "" : undefined}
        data-scope="app-shell"
        ref={shellRef}
        style={{ ...shellStyle, ...gridStyle, ...style }}
      >
        {childSlots.banner}
        {childSlots.inspectors.start}
        {childSlots.navigation}
        {childSlots.inspectors.end}
        {childSlots.rails.start}
        {childSlots.panels.start}
        {childSlots.main}
        {childSlots.panels.end}
        {childSlots.rails.end}
      </div>
    </AppShellContext>
  );
}

// #region Display Names
AppShellRoot.displayName = "AppShell";
// #endregion
