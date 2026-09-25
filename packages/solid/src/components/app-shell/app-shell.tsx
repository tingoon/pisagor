import { appShellRecipe } from "@pisagor/recipes/app-shell";
import type { ComponentProps, JSX } from "solid-js";
import { createEffect, createSignal, onCleanup, splitProps } from "solid-js";
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

const APP_SHELL_BANNER_ROW =
  '"banner banner banner banner banner banner banner"';

export interface AppShellRootProps extends ComponentProps<"div"> {
  recipe?: typeof appShellRecipe;
}

export function AppShellRoot(props: AppShellRootProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "children",
    "recipe",
    "class",
    "style",
  ]);
  const slots = () => (local.recipe ?? appShellRecipe)();
  const [regionRevision, setRegionRevision] = createSignal(0);
  const [regionVars, setRegionVars] = createSignal({ ...ZERO_REGION_VARS });
  const [fixedStackVars, setFixedStackVars] = createSignal({
    ...ZERO_FIXED_STACK_VARS,
  });
  const panelStates = {
    current: {} as Partial<Record<AppShellPlacement, AppShellSideState>>,
  };
  const inspectorStates = {
    current: {} as Partial<Record<AppShellPlacement, AppShellSideState>>,
  };
  const railStates = {
    current: {} as Partial<Record<AppShellPlacement, AppShellRailState>>,
  };
  const shellRef = { current: null as HTMLDivElement | null };
  const [regionResizing, setRegionResizing] = createSignal(false);

  const setRegionVar = (name: AppShellRegionVar, value: string) => {
    setRegionVars((current) => {
      if (current[name] === value) return current;
      return { ...current, [name]: value };
    });
  };

  const setFixedStackVar = (name: AppShellFixedStackVar, value: string) => {
    setFixedStackVars((current) => {
      if (current[name] === value) return current;
      return { ...current, [name]: value };
    });
  };

  createEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.code === "Backslash") {
        event.preventDefault();
        panelStates.current.start?.toggle();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    onCleanup(() => window.removeEventListener("keydown", onKeyDown));
  });

  const notifyRegionChange = () => setRegionRevision((r) => r + 1);

  const gridStyle = {
    "grid-template-areas": [
      APP_SHELL_BANNER_ROW,
      APP_SHELL_NAV_ROW,
      APP_SHELL_CONTENT_ROW,
    ].join(" "),
    "grid-template-columns": APP_SHELL_GRID_COLUMNS,
    "grid-template-rows": "auto auto auto",
  };

  return (
    <AppShellContext
      value={{
        defaultInspectorResizableProps:
          APP_SHELL_DEFAULT_INSPECTOR_RESIZABLE_PROPS,
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
        slots: slots(),
      }}
    >
      <div
        {...rest}
        class={slots().base({ class: local.class })}
        data-part="root"
        data-resizing={regionResizing() ? "" : undefined}
        data-scope="app-shell"
        ref={(el) => {
          shellRef.current = el;
        }}
        style={{
          ...regionVars(),
          ...fixedStackVars(),
          ...gridStyle,
          ...(typeof local.style === "object" &&
          local.style &&
          !Array.isArray(local.style)
            ? (local.style as Record<string, string>)
            : {}),
        }}
      >
        {local.children}
      </div>
    </AppShellContext>
  );
}
