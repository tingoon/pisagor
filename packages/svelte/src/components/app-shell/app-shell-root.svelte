<script lang="ts">
import { useHotkey } from "@ark-ui/svelte/hotkeys";
import { appShellRecipe } from "@pisagor/recipes/app-shell";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";
import {
  APP_SHELL_DEFAULT_INSPECTOR_RESIZABLE_PROPS,
  APP_SHELL_DEFAULT_PANEL_RESIZABLE_PROPS,
  type AppShellFixedStackVar,
  type AppShellPlacement,
  type AppShellRailState,
  type AppShellRegionVar,
  type AppShellSideState,
  setAppShellContext,
  ZERO_FIXED_STACK_VARS,
  ZERO_REGION_VARS,
} from "./app-shell.context";

type Props = Omit<HTMLAttributes<HTMLDivElement>, "class" | "style"> & {
  children?: import("svelte").Snippet;
  class?: string | undefined;
  recipe?: typeof appShellRecipe;
  style?: string | undefined;
};

let { recipe = appShellRecipe, class: className, style, children, ...rest }: Props = $props();

const slots = $derived(recipe());
let regionRevision = $state(0);
let regionVars = $state({ ...ZERO_REGION_VARS });
let fixedStackVars = $state({ ...ZERO_FIXED_STACK_VARS });
let regionResizing = $state(false);
let bannerCount = $state(0);
let navigationCount = $state(0);
let shellElement = $state<HTMLDivElement | null>(null);

const panelStates: Partial<Record<AppShellPlacement, AppShellSideState>> = {};
const inspectorStates: Partial<Record<AppShellPlacement, AppShellSideState>> = {};
const railStates: Partial<Record<AppShellPlacement, AppShellRailState>> = {};

const hasBanner = $derived(bannerCount > 0);
const hasNavigation = $derived(navigationCount > 0);

function notifyRegionChange() {
  regionRevision += 1;
}

function setRegionVar(name: AppShellRegionVar, value: string) {
  if (regionVars[name] === value) return;
  regionVars = { ...regionVars, [name]: value };
}

function setFixedStackVar(name: AppShellFixedStackVar, value: string) {
  if (fixedStackVars[name] === value) return;
  fixedStackVars = { ...fixedStackVars, [name]: value };
}

function registerBanner() {
  bannerCount += 1;
  return () => {
    bannerCount = Math.max(0, bannerCount - 1);
  };
}

function registerNavigation() {
  navigationCount += 1;
  return () => {
    navigationCount = Math.max(0, navigationCount - 1);
  };
}

useHotkey(() => ({
  action: () => {
    panelStates.start?.toggle();
  },
  hotkey: "mod+\\",
}));

setAppShellContext({
  get defaultInspectorResizableProps() {
    return APP_SHELL_DEFAULT_INSPECTOR_RESIZABLE_PROPS;
  },
  get defaultPanelResizableProps() {
    return APP_SHELL_DEFAULT_PANEL_RESIZABLE_PROPS;
  },
  get fixedStackVars() {
    return fixedStackVars;
  },
  get hasBanner() {
    return hasBanner;
  },
  get hasNavigation() {
    return hasNavigation;
  },
  inspectorStates,
  notifyRegionChange,
  panelStates,
  railStates,
  get regionResizing() {
    return regionResizing;
  },
  get regionRevision() {
    return regionRevision;
  },
  get regionVars() {
    return regionVars;
  },
  registerBanner,
  registerNavigation,
  setFixedStackVar,
  setRegionResizing: (value: boolean) => {
    regionResizing = value;
  },
  setRegionVar,
  get shellElement() {
    return shellElement;
  },
  get slots() {
    return slots;
  },
});

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

const gridTemplateAreas = $derived.by(() => {
  if (hasBanner && hasNavigation) {
    return `${APP_SHELL_BANNER_ROW}\n${APP_SHELL_NAV_ROW}\n${APP_SHELL_CONTENT_ROW}`;
  }
  if (hasBanner) return `${APP_SHELL_BANNER_ROW}\n${APP_SHELL_CONTENT_ROW}`;
  if (hasNavigation) return `${APP_SHELL_NAV_ROW}\n${APP_SHELL_CONTENT_ROW}`;
  return APP_SHELL_CONTENT_ROW;
});

const gridTemplateRows = $derived(
  [...(hasBanner ? ["auto"] : []), ...(hasNavigation ? ["auto"] : []), "auto"].join(" "),
);

const shellStyle = $derived(
  [
    ...Object.entries(regionVars).map(([k, v]) => `${k}: ${v}`),
    ...Object.entries(fixedStackVars).map(([k, v]) => `${k}: ${v}`),
    `grid-template-areas: ${gridTemplateAreas}`,
    `grid-template-columns: ${APP_SHELL_GRID_COLUMNS}`,
    `grid-template-rows: ${gridTemplateRows}`,
    style ?? "",
  ]
    .filter(Boolean)
    .join("; "),
);
</script>

<div
  {...rest}
  class={slots.base({ class: cn(className) })}
  data-part="root"
  data-resizing={regionResizing ? "" : undefined}
  data-scope="app-shell"
  style={shellStyle}
  bind:this={shellElement}
>
  {@render children?.()}
</div>
