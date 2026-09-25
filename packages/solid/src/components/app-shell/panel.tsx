import { cn } from "@pisagor/utils";
import type { ComponentProps, JSX } from "solid-js";
import { createSignal, Show, splitProps } from "solid-js";
import {
  ArrowsInLineHorizontalIcon,
  ArrowsOutLineHorizontalIcon,
} from "../../internal/icons";
import type { ButtonProps } from "../button";
import { Resizable } from "../resizable";
import { ScrollArea } from "../scroll-area";
import type {
  AppShellPlacement,
  AppShellRegionPosition,
  AppShellResizableProps,
} from "./app-shell.context";
import { useAppShell } from "./app-shell.context";
import {
  gridAreaFor,
  mergeResizableProps,
  regionPositionClasses,
  regionVarFor,
  useAppShellSideOpen,
  useRegionWidth,
  useRegisteredSideState,
  useShellRegionResizeCallbacks,
} from "./region";
import { AppShellSideTrigger } from "./side-trigger";

export interface AppShellPanelProps extends ComponentProps<"aside"> {
  placement?: AppShellPlacement;
  position?: AppShellRegionPosition;
  defaultOpen?: boolean;
  defaultWidth?: number;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  resizableProps?: AppShellResizableProps;
}

export interface AppShellPanelTriggerProps
  extends Omit<ButtonProps, "children"> {
  placement?: AppShellPlacement;
  children?: JSX.Element;
  off?: JSX.Element;
  on?: JSX.Element;
}

export type AppShellPanelHeaderProps = ComponentProps<"div">;
export type AppShellPanelContentProps = ComponentProps<"div">;
export type AppShellPanelFooterProps = ComponentProps<"div">;

export function AppShellPanel(props: AppShellPanelProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "placement",
    "position",
    "defaultOpen",
    "defaultWidth",
    "open",
    "children",
    "onOpenChange",
    "class",
    "style",
    "resizableProps",
  ]);
  const placement = () => local.placement ?? "start";
  const position = () => local.position ?? "fixed";
  const { defaultPanelResizableProps, panelStates, slots } = useAppShell();
  const resizableProps = () =>
    mergeResizableProps(defaultPanelResizableProps, local.resizableProps);
  const side = useRegisteredSideState({
    defaultOpen: local.defaultOpen ?? false,
    getControlledOpen: () => local.open,
    onOpenChange: local.onOpenChange,
    placement: placement(),
    statesRef: panelStates,
  });
  const regionVar = regionVarFor(placement(), "panel");
  const [widthPx, setWidthPx] = createSignal(local.defaultWidth ?? 256);
  const resolvedWidth = () => (side.open() ? `${widthPx()}px` : "0px");
  const regionResizeCallbacks = useShellRegionResizeCallbacks(regionVar);

  useRegionWidth(regionVar, resolvedWidth);

  return (
    <aside
      {...rest}
      class={cn(
        slots.panel(),
        placement() === "start"
          ? "border-border border-e"
          : "border-border border-s",
        regionPositionClasses(slots, position(), "column"),
        side.open() ? "opacity-100" : "pointer-events-none opacity-0",
        local.class,
      )}
      data-part="panel"
      data-placement={placement()}
      data-position={position()}
      data-scope="app-shell"
      data-state={side.open() ? "open" : "closed"}
      style={{
        "grid-area": gridAreaFor(placement(), "panel"),
        ...(typeof local.style === "object" &&
        local.style &&
        !Array.isArray(local.style)
          ? (local.style as Record<string, string>)
          : {}),
      }}
    >
      <Show when={side.open() && resizableProps().enabled}>
        <Resizable.EdgeHandle
          {...regionResizeCallbacks}
          handlePosition={resizableProps().handlePosition}
          label={`Resize ${placement()} panel`}
          onWidthChange={setWidthPx}
          placement={placement()}
          width={widthPx()}
        />
      </Show>
      <div class={slots.sideBody()}>{local.children}</div>
    </aside>
  );
}

export function AppShellPanelHeader(
  props: AppShellPanelHeaderProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useAppShell();
  return (
    <div
      {...rest}
      class={slots.panelHeader({ class: local.class })}
      data-part="panel-header"
      data-scope="app-shell"
    />
  );
}

export function AppShellPanelContent(
  props: AppShellPanelContentProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useAppShell();
  return (
    <ScrollArea class={slots.scrollArea()}>
      <div
        {...rest}
        class={slots.panelContent({ class: local.class })}
        data-part="panel-content"
        data-scope="app-shell"
      />
    </ScrollArea>
  );
}

export function AppShellPanelFooter(
  props: AppShellPanelFooterProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useAppShell();
  return (
    <div
      {...rest}
      class={slots.panelFooter({ class: local.class })}
      data-part="panel-footer"
      data-scope="app-shell"
    />
  );
}

export function AppShellPanelTrigger(
  props: AppShellPanelTriggerProps,
): JSX.Element {
  const [local, rest] = splitProps(props, [
    "placement",
    "children",
    "off",
    "on",
    "onClick",
    "class",
  ]);
  const placement = () => local.placement ?? "start";
  const { panelStates } = useAppShell();
  const open = useAppShellSideOpen(placement(), panelStates);

  return (
    <AppShellSideTrigger
      {...rest}
      class={local.class}
      data-part="panel-trigger"
      defaultOff={<ArrowsOutLineHorizontalIcon />}
      defaultOn={<ArrowsInLineHorizontalIcon />}
      off={local.off}
      on={local.on}
      onClick={local.onClick}
      open={open()}
      placement={placement()}
      toggle={() => {
        panelStates.current[placement()]?.toggle();
      }}
    >
      {local.children}
    </AppShellSideTrigger>
  );
}
