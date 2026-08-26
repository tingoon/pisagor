import { ArrowsInLineHorizontalIcon, ArrowsOutLineHorizontalIcon } from "@phosphor-icons/react";
import { cn } from "@pisagor/utils";
import type { ComponentProps, ReactNode } from "react";
import { useState } from "react";
import type { WithTestId } from "../../internal/types";
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

export interface AppShellPanelProps extends ComponentProps<"aside">, WithTestId {
  /**
   * Initial panel width in pixels.
   *
   * @defaultValue 256
   */
  defaultWidth?: number;
  /**
   * Initial open state when uncontrolled.
   *
   * @defaultValue false
   */
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  open?: boolean;
  /**
   * Grid column side for the panel.
   *
   * @defaultValue "start"
   */
  placement?: AppShellPlacement;
  /**
   * Scroll behavior for the panel column.
   *
   * - `fixed` — stays in the viewport while the page scrolls.
   * - `relative` — scrolls with the page in normal document flow.
   *
   * @defaultValue "fixed"
   */
  position?: AppShellRegionPosition;
  /** Resizable edge-handle options. Defaults come from `useAppShell()`. */
  resizableProps?: AppShellResizableProps;
}

export interface AppShellPanelTriggerProps extends Omit<ButtonProps, "children"> {
  /** Custom content when no `on` / `off` icons are provided. */
  children?: ReactNode;
  /** Content shown when the region is open. */
  on?: ReactNode;
  /** Content shown when the region is closed. */
  off?: ReactNode;
  /**
   * Panel side to toggle.
   *
   * @defaultValue "start"
   */
  placement?: AppShellPlacement;
}

export interface AppShellPanelHeaderProps extends ComponentProps<"div"> {}

export interface AppShellPanelContentProps extends ComponentProps<"div"> {}

export interface AppShellPanelFooterProps extends ComponentProps<"div"> {}

export function AppShellPanel({
  placement = "start",
  defaultOpen = false,
  open: openProp,
  onOpenChange,
  position = "fixed",
  defaultWidth = 256,
  resizableProps: resizablePropsProp,
  children,
  className,
  testId,
  style,
  ...rest
}: AppShellPanelProps) {
  const { defaultPanelResizableProps, panelStates, slots } = useAppShell();
  const resizableProps = mergeResizableProps(defaultPanelResizableProps, resizablePropsProp);
  const side = useRegisteredSideState({
    controlledOpen: openProp,
    defaultOpen,
    onOpenChange,
    placement,
    statesRef: panelStates,
  });
  const regionVar = regionVarFor(placement, "panel");
  const [widthPx, setWidthPx] = useState(defaultWidth);
  const resolvedWidth = side.open ? `${widthPx}px` : "0px";
  const regionResizeCallbacks = useShellRegionResizeCallbacks(regionVar);

  useRegionWidth(regionVar, resolvedWidth);

  return (
    <aside
      {...rest}
      className={cn(
        slots.panel(),
        placement === "start" ? "border-e border-border" : "border-s border-border",
        regionPositionClasses(slots, position, "column"),
        side.open ? "opacity-100" : "pointer-events-none opacity-0",
        className,
      )}
      data-part="panel"
      data-placement={placement}
      data-position={position}
      data-scope="app-shell"
      data-state={side.open ? "open" : "closed"}
      data-testid={testId}
      style={{ gridArea: gridAreaFor(placement, "panel"), ...style }}
    >
      {side.open && resizableProps.enabled ? (
        <Resizable.EdgeHandle
          handlePosition={resizableProps.handlePosition}
          label={`Resize ${placement} panel`}
          onWidthChange={setWidthPx}
          placement={placement}
          width={widthPx}
          {...regionResizeCallbacks}
        />
      ) : null}
      <div className={slots.inline()}>{children}</div>
    </aside>
  );
}

export function AppShellPanelHeader({ className, ...rest }: AppShellPanelHeaderProps) {
  const { slots } = useAppShell();

  return (
    <div
      {...rest}
      className={slots.panelHeader({ className })}
      data-part="panel-header"
      data-scope="app-shell"
    />
  );
}

export function AppShellPanelContent({ className, ...rest }: AppShellPanelContentProps) {
  const { slots } = useAppShell();

  return (
    <ScrollArea className={slots.scrollArea()}>
      <div
        {...rest}
        className={slots.panelContent({ className })}
        data-part="panel-content"
        data-scope="app-shell"
      />
    </ScrollArea>
  );
}

export function AppShellPanelFooter({ className, ...rest }: AppShellPanelFooterProps) {
  const { slots } = useAppShell();

  return (
    <div
      {...rest}
      className={slots.panelFooter({ className })}
      data-part="panel-footer"
      data-scope="app-shell"
    />
  );
}

export function AppShellPanelTrigger({
  placement = "start",
  children,
  className,
  on,
  off,
  onClick,
  ...rest
}: AppShellPanelTriggerProps) {
  const { panelStates } = useAppShell();
  const open = useAppShellSideOpen(placement, panelStates);

  return (
    <AppShellSideTrigger
      {...rest}
      className={className}
      dataPart="panel-trigger"
      defaultOff={<ArrowsOutLineHorizontalIcon />}
      defaultOn={<ArrowsInLineHorizontalIcon />}
      off={off}
      on={on}
      onClick={onClick}
      open={open}
      placement={placement}
      toggle={() => {
        panelStates.current[placement]?.toggle();
      }}
    >
      {children}
    </AppShellSideTrigger>
  );
}

// #region Display Names
AppShellPanel.displayName = "AppShell.Panel";
AppShellPanelHeader.displayName = "AppShell.PanelHeader";
AppShellPanelContent.displayName = "AppShell.PanelContent";
AppShellPanelFooter.displayName = "AppShell.PanelFooter";
AppShellPanelTrigger.displayName = "AppShell.PanelTrigger";
// #endregion
