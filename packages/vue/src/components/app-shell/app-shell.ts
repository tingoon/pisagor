import { PhArrowsInLineHorizontal, PhArrowsOutLineHorizontal } from "@phosphor-icons/vue";
import {
  appShellBannerVariants,
  appShellContentVariants,
  appShellHeaderVariants,
  appShellInline2Variants,
  appShellInlineVariants,
  appShellInspectorContentVariants,
  appShellInspectorFooterVariants,
  appShellInspectorHeaderVariants,
  appShellInspectorVariants,
  appShellMainVariants,
  appShellNavigationVariants,
  appShellPanelContentVariants,
  appShellPanelFooterVariants,
  appShellPanelHeaderVariants,
  appShellPanelVariants,
  appShellRailItemVariants,
  appShellRailVariants,
  appShellRegionRelativeColumnVariants,
  appShellRegionRelativeRowVariants,
  appShellRegionStickyBannerVariants,
  appShellRegionStickyColumnVariants,
  appShellRegionStickyHeaderVariants,
  appShellRegionStickyInspectorVariants,
  appShellRegionStickyNavigationVariants,
  appShellVariants,
} from "@pisagor/styles/ui/app-shell";
import { cn } from "@pisagor/utils";
import type { Component, VNode, VNodeChild } from "vue";
import {
  defineComponent,
  h,
  onBeforeUnmount,
  onMounted,
  type PropType,
  reactive,
  ref,
  watchEffect,
} from "vue";
import { createContext } from "../../utils/create-context";
import { Button } from "../button";
import { Resizable } from "../resizable";
import { ScrollArea } from "../scroll-area";
import { Swap } from "../swap";
import { Tooltip, type TooltipProps } from "../tooltip";

type AttrsWithClassStyle = {
  class?: string | string[] | Record<string, boolean>;
  onClick?: (event: MouseEvent) => void;
  size?: string;
  style?: Record<string, string>;
  variant?: string;
} & Record<string, unknown>;

// #region Types
export type AppShellPlacement = "start" | "end";

/** How a shell region behaves when the page scrolls. */
export type AppShellRegionPosition = "fixed" | "relative";

/** Vertical placement of the visible resize-handle grip. */
export type AppShellResizeHandlePosition = "bottom" | "center" | "top";

/** Resizable edge-handle options for a single panel or inspector region. */
export interface AppShellResizableProps {
  enabled?: boolean;
  handlePosition?: AppShellResizeHandlePosition;
}

export interface AppShellSideState {
  open: boolean;
  setOpen: (open: boolean | ((current: boolean) => boolean)) => void;
  toggle: () => void;
}

export interface AppShellRailState {
  activeRailId?: string;
  placement: AppShellPlacement;
  setActiveRailId: (id: string) => void;
}

export type AppShellFixedStackVar = "--app-shell-banner-height" | "--app-shell-navigation-height";

export type AppShellRegionVar =
  | "--app-shell-end-inspector-width"
  | "--app-shell-end-panel-width"
  | "--app-shell-end-rail-width"
  | "--app-shell-start-inspector-width"
  | "--app-shell-start-panel-width"
  | "--app-shell-start-rail-width";

export const APP_SHELL_DEFAULT_PANEL_RESIZABLE_PROPS = {
  enabled: true,
  handlePosition: "top",
} as const satisfies Required<Pick<AppShellResizableProps, "enabled" | "handlePosition">>;

export const APP_SHELL_DEFAULT_INSPECTOR_RESIZABLE_PROPS = {
  enabled: true,
  handlePosition: "top",
} as const satisfies Required<Pick<AppShellResizableProps, "enabled" | "handlePosition">>;

// #endregion

// #region Constants
const APP_SHELL_RAIL_WIDTH = "3.5rem";
const APP_SHELL_BANNER_HEIGHT_VAR: AppShellFixedStackVar = "--app-shell-banner-height";
const APP_SHELL_NAVIGATION_HEIGHT_VAR: AppShellFixedStackVar = "--app-shell-navigation-height";

const ZERO_FIXED_STACK_VARS: Record<AppShellFixedStackVar, string> = {
  "--app-shell-banner-height": "0px",
  "--app-shell-navigation-height": "0px",
};

const ZERO_REGION_VARS: Record<AppShellRegionVar, string> = {
  "--app-shell-end-inspector-width": "0px",
  "--app-shell-end-panel-width": "0px",
  "--app-shell-end-rail-width": "0px",
  "--app-shell-start-inspector-width": "0px",
  "--app-shell-start-panel-width": "0px",
  "--app-shell-start-rail-width": "0px",
};

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

function gridAreaFor(placement: AppShellPlacement, region: "inspector" | "panel" | "rail") {
  return `${placement}-${region}` as const;
}

function regionVarFor(placement: AppShellPlacement, region: "inspector" | "panel" | "rail") {
  return `--app-shell-${placement}-${region}-width` as AppShellRegionVar;
}

function mergeResizableProps(
  defaults: Required<Pick<AppShellResizableProps, "enabled" | "handlePosition">>,
  override?: AppShellResizableProps,
) {
  return {
    enabled: override?.enabled ?? defaults.enabled,
    handlePosition: override?.handlePosition ?? defaults.handlePosition,
  };
}

function regionPositionClasses(
  position: AppShellRegionPosition = "fixed",
  orientation: "column" | "row" = "column",
  rowLayer?: "banner" | "header" | "navigation",
  columnLayer?: "inspector",
) {
  if (position === "relative") {
    return orientation === "column"
      ? appShellRegionRelativeColumnVariants()
      : appShellRegionRelativeRowVariants();
  }

  if (orientation === "column") {
    if (columnLayer === "inspector") return appShellRegionStickyInspectorVariants();
    return appShellRegionStickyColumnVariants();
  }

  if (rowLayer === "banner") return appShellRegionStickyBannerVariants();
  if (rowLayer === "navigation") return appShellRegionStickyNavigationVariants();
  return appShellRegionStickyHeaderVariants();
}

function useHotkey(toggle: () => void) {
  let handler: ((event: KeyboardEvent) => void) | undefined;

  onMounted(() => {
    handler = (event) => {
      const isMod = event.ctrlKey || event.metaKey;
      if (!isMod) return;
      // React uses "Mod+\\"
      if (event.key === "\\") {
        event.preventDefault();
        toggle();
      }
    };

    window.addEventListener("keydown", handler);
  });

  onBeforeUnmount(() => {
    if (handler) window.removeEventListener("keydown", handler);
  });
}

// #endregion

// #region Contexts
interface AppShellContextValue {
  defaultInspectorResizableProps: typeof APP_SHELL_DEFAULT_INSPECTOR_RESIZABLE_PROPS;
  defaultPanelResizableProps: typeof APP_SHELL_DEFAULT_PANEL_RESIZABLE_PROPS;
  fixedStackVars: Record<AppShellFixedStackVar, string>;
  inspectorStates: Record<AppShellPlacement, AppShellSideState | undefined>;
  panelStates: Record<AppShellPlacement, AppShellSideState | undefined>;
  railStates: Record<AppShellPlacement, AppShellRailState | undefined>;
  regionResizing: boolean;
  regionVars: Record<AppShellRegionVar, string>;
  shellRef: { value: HTMLDivElement | null };
  setFixedStackVar: (name: AppShellFixedStackVar, value: string) => void;
  setRegionResizing: (resizing: boolean) => void;
  setRegionVar: (name: AppShellRegionVar, value: string) => void;
}

const [provideAppShellContext, useAppShell] = createContext<AppShellContextValue>({
  defaultValue: undefined as unknown as AppShellContextValue,
  name: "AppShell",
  strict: false,
});

const [provideAppShellRailContext, useAppShellRail] = createContext<AppShellRailState>({
  name: "AppShellRail",
  strict: false,
});

export { useAppShell, useAppShellRail };

// #endregion

// #region Slot partitioning
interface AppShellSlots {
  banner: VNodeChild;
  inspectors: Record<AppShellPlacement, VNodeChild>;
  main: VNodeChild;
  navigation: VNodeChild;
  panels: Record<AppShellPlacement, VNodeChild>;
  rails: Record<AppShellPlacement, VNodeChild>;
}

function getDisplayName(type: unknown): string | undefined {
  if (!type) return undefined;
  if (typeof type === "function") return type.name;
  if (typeof type === "object" && type !== null) {
    const t = type as { displayName?: string; name?: string };
    return t.displayName ?? t.name;
  }
  return undefined;
}

function partitionAppShellChildren(children: VNodeChild[]): AppShellSlots {
  const slots: AppShellSlots = {
    banner: null,
    inspectors: { end: null, start: null },
    main: null,
    navigation: null,
    panels: { end: null, start: null },
    rails: { end: null, start: null },
  };

  for (const child of children) {
    if (!child || typeof child !== "object") continue;

    const vnode = child as VNode & { props?: { placement?: AppShellPlacement } };
    const name = getDisplayName(vnode.type);
    const placement: AppShellPlacement = (vnode.props?.placement ?? "start") as AppShellPlacement;

    switch (name) {
      case "AppShell.Banner":
        slots.banner = vnode;
        break;
      case "AppShell.Inspector":
        slots.inspectors[placement] = vnode;
        break;
      case "AppShell.Main":
        slots.main = vnode;
        break;
      case "AppShell.Navigation":
        slots.navigation = vnode;
        break;
      case "AppShell.Panel":
        slots.panels[placement] = vnode;
        break;
      case "AppShell.Rail":
        slots.rails[placement] = vnode;
        break;
    }
  }

  return slots;
}

// #endregion

// #region Helper composables
function useRegisteredSideState({
  controlledOpen,
  defaultOpen,
  onOpenChange,
  placement,
  statesRef,
}: {
  controlledOpen: { value: boolean | undefined };
  defaultOpen: boolean;
  onOpenChange?: (open: boolean) => void;
  placement: AppShellPlacement;
  statesRef: Record<AppShellPlacement, AppShellSideState | undefined>;
}) {
  // This is always called inside `AppShell`, so context should exist.
  void useAppShell();

  const internalOpen = ref(defaultOpen);
  const resolvedOpen = ref<boolean>(controlledOpen.value ?? internalOpen.value);

  const sideState = reactive<AppShellSideState>({
    open: resolvedOpen.value,
    setOpen: () => undefined,
    toggle: () => undefined,
  });

  watchEffect(() => {
    resolvedOpen.value = controlledOpen.value ?? internalOpen.value;
    sideState.open = resolvedOpen.value;
  });

  const setOpen = (value: boolean | ((current: boolean) => boolean)) => {
    const current = sideState.open;
    const next =
      typeof value === "function" ? (value as (current: boolean) => boolean)(current) : value;

    onOpenChange?.(next);
    if (controlledOpen.value === undefined) internalOpen.value = next;
  };

  const toggle = () => setOpen((current) => !current);

  sideState.setOpen = setOpen;
  sideState.toggle = toggle;

  statesRef[placement] = sideState;

  onBeforeUnmount(() => {
    if (statesRef[placement] === sideState) {
      delete statesRef[placement];
    }
  });

  return sideState;
}

function useShellRegionResizeCallbacks(regionVar: AppShellRegionVar) {
  const { setRegionResizing, setRegionVar } = useAppShell() as AppShellContextValue;

  return {
    onResizeChange: (nextWidth: number) => setRegionVar(regionVar, `${nextWidth}px`),
    onResizeEnd: () => setRegionResizing(false),
    onResizeStart: () => setRegionResizing(true),
  };
}

function useRegionWidth(regionVar: AppShellRegionVar, widthPx: { value: string }) {
  const { setRegionVar } = useAppShell() as AppShellContextValue;
  watchEffect(() => {
    setRegionVar(regionVar, widthPx.value);
  });
  onBeforeUnmount(() => {
    setRegionVar(regionVar, "0px");
  });
}

function useSyncFixedRegionHeight(
  elementRef: { value: HTMLElement | null },
  position: AppShellRegionPosition,
  cssVar: AppShellFixedStackVar,
) {
  const { setFixedStackVar } = useAppShell() as AppShellContextValue;
  onMounted(() => {
    const element = elementRef.value;
    if (position !== "fixed" || !element) {
      setFixedStackVar(cssVar, "0px");
      return;
    }

    const syncHeight = () => setFixedStackVar(cssVar, `${element.offsetHeight}px`);
    syncHeight();

    const observer = new ResizeObserver(syncHeight);
    observer.observe(element);

    onBeforeUnmount(() => {
      observer.disconnect();
      setFixedStackVar(cssVar, "0px");
    });
  });
}

function useRegisteredRailState({
  activeRailId,
  defaultActiveRailId,
  onActiveRailIdChange,
  placement,
  statesRef,
}: {
  activeRailId: { value: string | undefined };
  defaultActiveRailId?: string;
  onActiveRailIdChange?: (id: string) => void;
  placement: AppShellPlacement;
  statesRef: Record<AppShellPlacement, AppShellRailState | undefined>;
}) {
  const internalActiveId = ref(defaultActiveRailId);

  const setActiveRailId = (id: string) => {
    onActiveRailIdChange?.(id);
    if (activeRailId.value === undefined) internalActiveId.value = id;
  };

  const railState = reactive<AppShellRailState>({
    activeRailId: activeRailId.value ?? internalActiveId.value,
    placement,
    setActiveRailId,
  });

  watchEffect(() => {
    railState.activeRailId = activeRailId.value ?? internalActiveId.value;
  });

  statesRef[placement] = railState;

  onBeforeUnmount(() => {
    if (statesRef[placement] === railState) {
      delete statesRef[placement];
    }
  });

  return railState;
}

// #endregion

// #region Components
export const AppShellRoot = defineComponent({
  inheritAttrs: false,
  name: "AppShell",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    testId: String,
  },
  setup(props, { attrs, slots }) {
    const regionRevision = ref(0);
    void regionRevision;

    const regionVars = reactive({ ...ZERO_REGION_VARS });
    const fixedStackVars = reactive({ ...ZERO_FIXED_STACK_VARS });
    const panelStates = reactive<Record<AppShellPlacement, AppShellSideState | undefined>>({
      end: undefined,
      start: undefined,
    });
    const inspectorStates = reactive<Record<AppShellPlacement, AppShellSideState | undefined>>({
      end: undefined,
      start: undefined,
    });
    const railStates = reactive<Record<AppShellPlacement, AppShellRailState | undefined>>({
      end: undefined,
      start: undefined,
    });
    const regionResizing = ref(false);
    const shellRef = ref<HTMLDivElement | null>(null);

    const setRegionVar = (name: AppShellRegionVar, value: string) => {
      regionVars[name] = value;
    };

    const setFixedStackVar = (name: AppShellFixedStackVar, value: string) => {
      fixedStackVars[name] = value;
    };

    const setRegionResizing = (resizing: boolean) => {
      regionResizing.value = resizing;
    };

    const contextValue = reactive<AppShellContextValue>({
      defaultInspectorResizableProps: APP_SHELL_DEFAULT_INSPECTOR_RESIZABLE_PROPS,
      defaultPanelResizableProps: APP_SHELL_DEFAULT_PANEL_RESIZABLE_PROPS,
      fixedStackVars,
      inspectorStates,
      panelStates,
      railStates,
      regionResizing: regionResizing.value,
      regionVars,
      setFixedStackVar,
      setRegionResizing,
      setRegionVar,
      shellRef: shellRef,
    });

    watchEffect(() => {
      contextValue.regionResizing = regionResizing.value;
    });

    provideAppShellContext(contextValue);

    useHotkey(() => {
      panelStates.start?.toggle?.();
    });

    return () => {
      const defaultNodes = slots.default?.() ?? [];
      const slotsResolved = partitionAppShellChildren(defaultNodes as VNodeChild[]);
      const hasBanner = Boolean(slotsResolved.banner);
      const hasNavigation = Boolean(slotsResolved.navigation);

      const gridStyle = {
        gridTemplateAreas: buildGridAreas(hasBanner, hasNavigation),
        gridTemplateColumns: APP_SHELL_GRID_COLUMNS,
        gridTemplateRows: buildGridRows(hasBanner, hasNavigation),
      } as Record<string, unknown>;

      const shellStyle = { ...regionVars, ...fixedStackVars };

      return h(
        "div",
        {
          ...attrs,
          class: cn(appShellVariants(), props.class, (attrs as AttrsWithClassStyle).class),
          "data-part": "root",
          "data-resizing": regionResizing.value ? "" : undefined,
          "data-scope": "app-shell",
          "data-testid": props.testId,
          ref: shellRef,
          style: {
            ...shellStyle,
            ...gridStyle,
            ...(attrs as AttrsWithClassStyle).style,
            ...(props as AttrsWithClassStyle).style,
          },
        },
        () => [
          slotsResolved.banner ?? null,
          slotsResolved.inspectors.start ?? null,
          slotsResolved.navigation ?? null,
          slotsResolved.inspectors.end ?? null,
          slotsResolved.rails.start ?? null,
          slotsResolved.panels.start ?? null,
          slotsResolved.main ?? null,
          slotsResolved.panels.end ?? null,
          slotsResolved.rails.end ?? null,
        ],
      );
    };
  },
});

export const AppShellBanner = defineComponent({
  inheritAttrs: false,
  name: "AppShell.Banner",
  props: {
    position: { default: "fixed", type: String as PropType<AppShellRegionPosition> },
  },
  setup(props, { attrs, slots }) {
    const bannerRef = ref<HTMLElement | null>(null);
    useSyncFixedRegionHeight(bannerRef, props.position, APP_SHELL_BANNER_HEIGHT_VAR);

    return () =>
      h(
        "div",
        {
          ...attrs,
          class: cn(
            appShellBannerVariants(),
            regionPositionClasses(props.position, "row", "banner"),
            (attrs as AttrsWithClassStyle).class,
          ),
          "data-part": "banner",
          "data-position": props.position,
          "data-scope": "app-shell",
          ref: bannerRef,
          style: { gridArea: "banner", ...(attrs as AttrsWithClassStyle).style },
        },
        slots,
      );
  },
});

export const AppShellNavigation = defineComponent({
  inheritAttrs: false,
  name: "AppShell.Navigation",
  props: {
    position: { default: "fixed", type: String as PropType<AppShellRegionPosition> },
  },
  setup(props, { attrs, slots }) {
    const navRef = ref<HTMLElement | null>(null);
    useSyncFixedRegionHeight(navRef, props.position, APP_SHELL_NAVIGATION_HEIGHT_VAR);

    return () =>
      h(
        "nav",
        {
          ...attrs,
          class: cn(
            appShellNavigationVariants(),
            regionPositionClasses(props.position, "row", "navigation"),
            (attrs as AttrsWithClassStyle).class,
          ),
          "data-part": "navigation",
          "data-position": props.position,
          "data-scope": "app-shell",
          ref: navRef,
          style: { gridArea: "navigation", ...(attrs as AttrsWithClassStyle).style },
        },
        slots,
      );
  },
});

export const AppShellMain = defineComponent({
  inheritAttrs: false,
  name: "AppShell.Main",
  setup(_, { attrs, slots }) {
    return () =>
      h(
        "div",
        {
          ...attrs,
          class: cn(appShellMainVariants(), (attrs as AttrsWithClassStyle).class),
          "data-part": "main",
          "data-scope": "app-shell",
          style: { gridArea: "main", ...(attrs as AttrsWithClassStyle).style },
        },
        slots,
      );
  },
});

export const AppShellHeader = defineComponent({
  inheritAttrs: false,
  name: "AppShell.Header",
  props: {
    position: { default: "fixed", type: String as PropType<AppShellRegionPosition> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        "header",
        {
          ...attrs,
          class: cn(
            appShellHeaderVariants(),
            regionPositionClasses(props.position, "row", "header"),
            (attrs as AttrsWithClassStyle).class,
          ),
          "data-part": "header",
          "data-position": props.position,
          "data-scope": "app-shell",
        },
        slots,
      );
  },
});

export const AppShellContent = defineComponent({
  inheritAttrs: false,
  name: "AppShell.Content",
  setup(_, { attrs, slots }) {
    return () =>
      h(
        "main",
        {
          ...attrs,
          class: cn(appShellContentVariants(), (attrs as AttrsWithClassStyle).class),
          "data-part": "content",
          "data-scope": "app-shell",
        },
        slots,
      );
  },
});

export const AppShellPanel = defineComponent({
  inheritAttrs: false,
  name: "AppShell.Panel",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    defaultOpen: { default: false, type: Boolean },
    defaultWidth: { default: 256, type: Number },
    onOpenChange: { default: undefined, type: Function as PropType<(open: boolean) => void> },
    open: { default: undefined, type: Boolean },
    placement: { default: "start", type: String as PropType<AppShellPlacement> },
    position: { default: "fixed", type: String as PropType<AppShellRegionPosition> },
    resizableProps: { default: undefined, type: Object as PropType<AppShellResizableProps> },
    testId: String,
  },
  setup(props, { attrs, slots }) {
    const { defaultPanelResizableProps, panelStates } = useAppShell() as AppShellContextValue;

    const resizableProps = mergeResizableProps(defaultPanelResizableProps, props.resizableProps);
    const controlledOpen = ref(props.open);
    watchEffect(() => {
      controlledOpen.value = props.open;
    });

    const side = useRegisteredSideState({
      controlledOpen,
      defaultOpen: props.defaultOpen,
      onOpenChange: props.onOpenChange,
      placement: props.placement,
      statesRef: panelStates,
    });

    const regionVar = regionVarFor(props.placement, "panel");
    const widthPx = ref(props.defaultWidth);
    const resolvedWidth = ref<string>(side.open ? `${widthPx.value}px` : "0px");
    watchEffect(() => {
      resolvedWidth.value = side.open ? `${widthPx.value}px` : "0px";
    });

    useRegionWidth(regionVar, resolvedWidth);
    const regionResizeCallbacks = useShellRegionResizeCallbacks(regionVar);

    return () =>
      h(
        "aside",
        {
          ...attrs,
          class: cn(
            appShellPanelVariants(),
            props.placement === "start" ? "border-e border-border" : "border-s border-border",
            regionPositionClasses(props.position, "column"),
            side.open ? "opacity-100" : "pointer-events-none opacity-0",
            props.class,
            (attrs as AttrsWithClassStyle).class,
          ),
          "data-part": "panel",
          "data-placement": props.placement,
          "data-position": props.position,
          "data-scope": "app-shell",
          "data-state": side.open ? "open" : "closed",
          "data-testid": props.testId,
          style: {
            gridArea: gridAreaFor(props.placement, "panel"),
            ...(attrs as AttrsWithClassStyle).style,
          },
        },
        () => [
          side.open && resizableProps.enabled
            ? h(Resizable.EdgeHandle, {
                handlePosition: resizableProps.handlePosition,
                label: `Resize ${props.placement} panel`,
                onWidthChange: (next: number) => {
                  widthPx.value = next;
                },
                placement: props.placement,
                width: widthPx.value,
                ...regionResizeCallbacks,
              })
            : null,
          h("div", { class: appShellInlineVariants() }, () => slots.default?.()),
        ],
      );
  },
});

export const AppShellPanelHeader = defineComponent({
  inheritAttrs: false,
  name: "AppShell.PanelHeader",
  setup(_, { attrs, slots }) {
    return () =>
      h(
        "div",
        {
          ...attrs,
          class: cn(appShellPanelHeaderVariants(), (attrs as AttrsWithClassStyle).class),
          "data-part": "panel-header",
          "data-scope": "app-shell",
        },
        slots,
      );
  },
});

export const AppShellPanelContent = defineComponent({
  inheritAttrs: false,
  name: "AppShell.PanelContent",
  setup(_, { attrs, slots }) {
    return () =>
      h(ScrollArea as Component, { class: appShellInline2Variants(), ...attrs }, () =>
        h(
          "div",
          {
            ...attrs,
            class: cn(appShellPanelContentVariants(), (attrs as AttrsWithClassStyle).class),
            "data-part": "panel-content",
            "data-scope": "app-shell",
          },
          slots,
        ),
      );
  },
});

export const AppShellPanelFooter = defineComponent({
  inheritAttrs: false,
  name: "AppShell.PanelFooter",
  setup(_, { attrs, slots }) {
    return () =>
      h(
        "div",
        {
          ...attrs,
          class: cn(appShellPanelFooterVariants(), (attrs as AttrsWithClassStyle).class),
          "data-part": "panel-footer",
          "data-scope": "app-shell",
        },
        slots,
      );
  },
});

export const AppShellPanelTrigger = defineComponent({
  inheritAttrs: false,
  name: "AppShell.PanelTrigger",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    off: { default: undefined, type: [String, Object, Array, Function] as PropType<VNodeChild> },
    on: { default: undefined, type: [String, Object, Array, Function] as PropType<VNodeChild> },
    onClick: { default: undefined, type: Function as PropType<(event: MouseEvent) => void> },
    placement: { default: "start", type: String as PropType<AppShellPlacement> },
  },
  setup(props, { attrs, slots }) {
    const { panelStates } = useAppShell() as AppShellContextValue;

    return () => {
      const side = panelStates[props.placement];
      const open = side?.open ?? false;
      return h(
        AppShellSideTrigger,
        {
          ...(attrs as AttrsWithClassStyle),
          class: props.class,
          dataPart: "panel-trigger",
          defaultOff: h(PhArrowsOutLineHorizontal),
          defaultOn: h(PhArrowsInLineHorizontal),
          off: props.off,
          on: props.on,
          onClick: (event: MouseEvent) => {
            props.onClick?.(event);
          },
          open,
          placement: props.placement,
          toggle: () => side?.toggle?.(),
        },
        () => slots.default?.(),
      );
    };
  },
});

export const AppShellInspector = defineComponent({
  inheritAttrs: false,
  name: "AppShell.Inspector",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    defaultOpen: { default: false, type: Boolean },
    defaultWidth: { default: 320, type: Number },
    onOpenChange: { default: undefined, type: Function as PropType<(open: boolean) => void> },
    open: { default: undefined, type: Boolean },
    placement: { default: "end", type: String as PropType<AppShellPlacement> },
    position: { default: "fixed", type: String as PropType<AppShellRegionPosition> },
    resizableProps: { default: undefined, type: Object as PropType<AppShellResizableProps> },
    testId: String,
  },
  setup(props, { attrs, slots }) {
    const { defaultInspectorResizableProps, inspectorStates } =
      useAppShell() as AppShellContextValue;

    const resizableProps = mergeResizableProps(
      defaultInspectorResizableProps,
      props.resizableProps,
    );
    const controlledOpen = ref(props.open);
    watchEffect(() => {
      controlledOpen.value = props.open;
    });

    const side = useRegisteredSideState({
      controlledOpen,
      defaultOpen: props.defaultOpen,
      onOpenChange: props.onOpenChange,
      placement: props.placement,
      statesRef: inspectorStates,
    });

    const regionVar = regionVarFor(props.placement, "inspector");
    const widthPx = ref(props.defaultWidth);
    const resolvedWidth = ref<string>(side.open ? `${widthPx.value}px` : "0px");
    watchEffect(() => {
      resolvedWidth.value = side.open ? `${widthPx.value}px` : "0px";
    });
    useRegionWidth(regionVar, resolvedWidth);
    const regionResizeCallbacks = useShellRegionResizeCallbacks(regionVar);

    return () =>
      h(
        "aside",
        {
          ...attrs,
          class: cn(
            appShellInspectorVariants(),
            props.placement === "start" ? "border-e" : "border-s",
            regionPositionClasses(props.position, "column", undefined, "inspector"),
            side.open ? "opacity-100" : "pointer-events-none opacity-0",
            props.class,
            (attrs as AttrsWithClassStyle).class,
          ),
          "data-part": "inspector",
          "data-placement": props.placement,
          "data-position": props.position,
          "data-scope": "app-shell",
          "data-state": side.open ? "open" : "closed",
          "data-testid": props.testId,
          style: {
            gridArea: gridAreaFor(props.placement, "inspector"),
            ...(attrs as AttrsWithClassStyle).style,
          },
        },
        () => [
          side.open && resizableProps.enabled
            ? h(Resizable.EdgeHandle, {
                handlePosition: resizableProps.handlePosition,
                label: `Resize ${props.placement} inspector`,
                onWidthChange: (next: number) => {
                  widthPx.value = next;
                },
                placement: props.placement,
                width: widthPx.value,
                ...regionResizeCallbacks,
              })
            : null,
          h("div", { class: appShellInlineVariants() }, () => slots.default?.()),
        ],
      );
  },
});

export const AppShellInspectorHeader = defineComponent({
  inheritAttrs: false,
  name: "AppShell.InspectorHeader",
  setup(_, { attrs, slots }) {
    return () =>
      h(
        "div",
        {
          ...attrs,
          class: cn(appShellInspectorHeaderVariants(), (attrs as AttrsWithClassStyle).class),
          "data-part": "inspector-header",
          "data-scope": "app-shell",
        },
        slots,
      );
  },
});

export const AppShellInspectorContent = defineComponent({
  inheritAttrs: false,
  name: "AppShell.InspectorContent",
  setup(_, { attrs, slots }) {
    return () =>
      h(ScrollArea as Component, { class: appShellInline2Variants(), ...attrs }, () =>
        h(
          "div",
          {
            ...attrs,
            class: cn(appShellInspectorContentVariants(), (attrs as AttrsWithClassStyle).class),
            "data-part": "inspector-content",
            "data-scope": "app-shell",
          },
          slots,
        ),
      );
  },
});

export const AppShellInspectorFooter = defineComponent({
  inheritAttrs: false,
  name: "AppShell.InspectorFooter",
  setup(_, { attrs, slots }) {
    return () =>
      h(
        "div",
        {
          ...attrs,
          class: cn(appShellInspectorFooterVariants(), (attrs as AttrsWithClassStyle).class),
          "data-part": "inspector-footer",
          "data-scope": "app-shell",
        },
        slots,
      );
  },
});

export const AppShellInspectorTrigger = defineComponent({
  inheritAttrs: false,
  name: "AppShell.InspectorTrigger",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    off: { default: undefined, type: [String, Object, Array, Function] as PropType<VNodeChild> },
    on: { default: undefined, type: [String, Object, Array, Function] as PropType<VNodeChild> },
    onClick: { default: undefined, type: Function as PropType<(event: MouseEvent) => void> },
    placement: { default: "end", type: String as PropType<AppShellPlacement> },
  },
  setup(props, { attrs, slots }) {
    const { inspectorStates } = useAppShell() as AppShellContextValue;

    return () => {
      const side = inspectorStates[props.placement];
      const open = side?.open ?? false;

      return h(
        AppShellSideTrigger,
        {
          ...(attrs as AttrsWithClassStyle),
          class: props.class,
          dataPart: "inspector-trigger",
          defaultOff: h(PhArrowsOutLineHorizontal),
          defaultOn: h(PhArrowsInLineHorizontal),
          off: props.off,
          on: props.on,
          onClick: (event: MouseEvent) => {
            props.onClick?.(event);
          },
          open,
          placement: props.placement,
          toggle: () => side?.toggle?.(),
        },
        () => slots.default?.(),
      );
    };
  },
});

export const AppShellRail = defineComponent({
  inheritAttrs: false,
  name: "AppShell.Rail",
  props: {
    activeRailId: { default: undefined, type: String },
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    defaultActiveRailId: { default: undefined, type: String },
    onActiveRailIdChange: { default: undefined, type: Function as PropType<(id: string) => void> },
    placement: { default: "start", type: String as PropType<AppShellPlacement> },
    position: { default: "fixed", type: String as PropType<AppShellRegionPosition> },
    testId: String,
  },
  setup(props, { attrs, slots }) {
    const { railStates } = useAppShell() as AppShellContextValue;

    const activeRailId = ref(props.activeRailId);
    watchEffect(() => {
      activeRailId.value = props.activeRailId;
    });

    const railState = useRegisteredRailState({
      activeRailId,
      defaultActiveRailId: props.defaultActiveRailId,
      onActiveRailIdChange: props.onActiveRailIdChange,
      placement: props.placement,
      statesRef: railStates,
    });

    const regionVar = regionVarFor(props.placement, "rail");
    useRegionWidth(regionVar, ref(APP_SHELL_RAIL_WIDTH));

    provideAppShellRailContext(railState);

    return () =>
      h(
        "aside",
        {
          ...attrs,
          class: cn(
            appShellRailVariants(),
            props.placement === "start" ? "border-e" : "border-s",
            regionPositionClasses(props.position, "column"),
            (attrs as AttrsWithClassStyle).class,
          ),
          "data-part": "rail",
          "data-placement": props.placement,
          "data-position": props.position,
          "data-scope": "app-shell",
          "data-testid": props.testId,
          style: {
            gridArea: gridAreaFor(props.placement, "rail"),
            ...(attrs as AttrsWithClassStyle).style,
          },
        },
        slots.default?.(),
      );
  },
});

// #endregion

// #endregion

export const AppShellRailItem = defineComponent({
  inheritAttrs: false,
  name: "AppShell.RailItem",
  props: {
    isActive: { default: undefined, type: Boolean },
    opensPanel: { default: false, type: Boolean },
    panelPlacement: { default: undefined, type: String as PropType<AppShellPlacement> },
    railId: { default: undefined, type: String },
    tooltip: {
      default: undefined,
      type: [String, Object] as PropType<string | Omit<TooltipProps, "children">>,
    },
  },
  setup(props, { attrs, slots }) {
    const railState = useAppShellRail() as AppShellRailState;
    const { panelStates } = useAppShell() as AppShellContextValue;

    const panelPlacement = props.panelPlacement ?? railState.placement;
    const active =
      props.isActive ?? (props.railId !== undefined && railState.activeRailId === props.railId);

    const button = h(
      Button as Component,
      {
        ...(attrs as AttrsWithClassStyle),
        "aria-current": active ? "page" : undefined,
        class: cn(appShellRailItemVariants(), (attrs as AttrsWithClassStyle).class),
        clickEffect: false,
        "data-active": active,
        "data-part": "rail-item",
        "data-rail-id": props.railId,
        "data-scope": "app-shell",
        onClick: (event: MouseEvent) => {
          (attrs as AttrsWithClassStyle).onClick?.(event);
          if (props.railId) railState.setActiveRailId(props.railId);
          if (props.opensPanel) panelStates[panelPlacement]?.setOpen(true);
        },
        size: (attrs as AttrsWithClassStyle).size ?? "icon-md",
        variant: (attrs as AttrsWithClassStyle).variant ?? "ghost",
      },
      () => slots.default?.(),
    );

    if (!props.tooltip) return button;

    const tooltipArgs =
      typeof props.tooltip === "string" ? { content: props.tooltip } : props.tooltip;
    const positioning = {
      placement: railState.placement === "end" ? "left" : "right",
      ...(tooltipArgs as TooltipProps).positioning,
    };

    return () =>
      h(Tooltip as Component, { ...(tooltipArgs as TooltipProps), positioning }, () => button);
  },
});

export const AppShellSideTrigger = defineComponent({
  inheritAttrs: false,
  name: "AppShellSideTrigger",
  props: {
    dataPart: { required: true, type: String },
    defaultOff: { required: true, type: [Object, Array, String, Function] as PropType<VNodeChild> },
    defaultOn: { required: true, type: [Object, Array, String, Function] as PropType<VNodeChild> },
    off: { default: undefined, type: [Object, Array, String, Function] as PropType<VNodeChild> },
    on: { default: undefined, type: [Object, Array, String, Function] as PropType<VNodeChild> },
    onClick: { default: undefined, type: Function as PropType<(event: MouseEvent) => void> },
    open: { required: true, type: Boolean },
    placement: { required: true, type: String as PropType<AppShellPlacement> },
    toggle: { required: true, type: Function as PropType<() => void> },
  },
  setup(props, { attrs, slots }) {
    const resolvedOff = props.off ?? props.defaultOff;
    const resolvedOn = props.on ?? props.defaultOn;

    return () =>
      h(
        Button as Component,
        {
          ...(attrs as AttrsWithClassStyle),
          "aria-label": attrs["aria-label"] ?? `Toggle ${props.placement} region`,
          "aria-pressed": props.open,
          class: cn(appShellInlineVariants(), (attrs as AttrsWithClassStyle).class),
          "data-part": props.dataPart,
          "data-placement": props.placement,
          "data-scope": "app-shell",
          "data-state": props.open ? "open" : "closed",
          onClick: (event: MouseEvent) => {
            props.onClick?.(event);
            props.toggle();
          },
          size: "icon-md",
          variant: "ghost",
        },
        () => [
          slots.default?.() ?? h(Swap, { off: resolvedOff, on: resolvedOn, swap: props.open }),
        ],
      );
  },
});
