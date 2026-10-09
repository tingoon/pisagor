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
import { useAppShellState, useAppShellStyles } from "./app-shell.context";
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

export interface AppShellInspectorProps extends ComponentProps<"aside"> {
  placement?: AppShellPlacement;
  position?: AppShellRegionPosition;
  defaultOpen?: boolean;
  defaultWidth?: number;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  resizableProps?: AppShellResizableProps;
}

export interface AppShellInspectorTriggerProps
  extends Omit<ButtonProps, "children"> {
  placement?: AppShellPlacement;
  children?: JSX.Element;
  off?: JSX.Element;
  on?: JSX.Element;
}

export type AppShellInspectorHeaderProps = ComponentProps<"div">;
export type AppShellInspectorContentProps = ComponentProps<"div">;
export type AppShellInspectorFooterProps = ComponentProps<"div">;

export function AppShellInspector(props: AppShellInspectorProps): JSX.Element {
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
  const placement = () => local.placement ?? "end";
  const position = () => local.position ?? "fixed";
  const styles = useAppShellStyles();
  const { defaultInspectorResizableProps, inspectorStates } =
    useAppShellState();
  const resizableProps = () =>
    mergeResizableProps(defaultInspectorResizableProps, local.resizableProps);
  const side = useRegisteredSideState({
    defaultOpen: local.defaultOpen ?? false,
    getControlledOpen: () => local.open,
    onOpenChange: local.onOpenChange,
    placement: placement(),
    statesRef: inspectorStates,
  });
  const regionVar = regionVarFor(placement(), "inspector");
  const [widthPx, setWidthPx] = createSignal(local.defaultWidth ?? 320);
  const resolvedWidth = () => (side.open() ? `${widthPx()}px` : "0px");
  const regionResizeCallbacks = useShellRegionResizeCallbacks(regionVar);

  useRegionWidth(regionVar, resolvedWidth);

  return (
    <aside
      {...rest}
      class={cn(
        styles.slots.inspector(),
        placement() === "start" ? "border-e" : "border-s",
        regionPositionClasses(
          styles.slots,
          position(),
          "column",
          undefined,
          "inspector",
        ),
        side.open() ? "opacity-100" : "pointer-events-none opacity-0",
        local.class,
      )}
      data-part="inspector"
      data-placement={placement()}
      data-position={position()}
      data-scope="app-shell"
      data-state={side.open() ? "open" : "closed"}
      style={{
        "grid-area": gridAreaFor(placement(), "inspector"),
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
          label={`Resize ${placement()} inspector`}
          onWidthChange={setWidthPx}
          placement={placement()}
          width={widthPx()}
        />
      </Show>
      <div class={styles.slots.sideBody()}>{local.children}</div>
    </aside>
  );
}

export function AppShellInspectorHeader(
  props: AppShellInspectorHeaderProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useAppShellStyles();
  return (
    <div
      {...rest}
      class={styles.slots.inspectorHeader({ class: local.class })}
      data-part="inspector-header"
      data-scope="app-shell"
    />
  );
}

export function AppShellInspectorContent(
  props: AppShellInspectorContentProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useAppShellStyles();
  return (
    <ScrollArea class={styles.slots.scrollArea()}>
      <div
        {...rest}
        class={styles.slots.inspectorContent({ class: local.class })}
        data-part="inspector-content"
        data-scope="app-shell"
      />
    </ScrollArea>
  );
}

export function AppShellInspectorFooter(
  props: AppShellInspectorFooterProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useAppShellStyles();
  return (
    <div
      {...rest}
      class={styles.slots.inspectorFooter({ class: local.class })}
      data-part="inspector-footer"
      data-scope="app-shell"
    />
  );
}

export function AppShellInspectorTrigger(
  props: AppShellInspectorTriggerProps,
): JSX.Element {
  const [local, rest] = splitProps(props, [
    "placement",
    "children",
    "off",
    "on",
    "onClick",
    "class",
  ]);
  const placement = () => local.placement ?? "end";
  const { inspectorStates } = useAppShellState();
  const open = useAppShellSideOpen(placement(), inspectorStates);

  return (
    <AppShellSideTrigger
      {...rest}
      class={local.class}
      data-part="inspector-trigger"
      defaultOff={<ArrowsOutLineHorizontalIcon />}
      defaultOn={<ArrowsInLineHorizontalIcon />}
      off={local.off}
      on={local.on}
      onClick={local.onClick}
      open={open()}
      placement={placement()}
      toggle={() => {
        inspectorStates.current[placement()]?.toggle();
      }}
    >
      {local.children}
    </AppShellSideTrigger>
  );
}
