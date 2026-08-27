import { ArrowsInLineHorizontalIcon, ArrowsOutLineHorizontalIcon } from "@phosphor-icons/react";
import { cn } from "@pisagor/utils";
import type { ComponentProps, ReactNode } from "react";
import { useState } from "react";
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

export interface AppShellInspectorProps extends ComponentProps<"aside"> {
  /**
   * Grid column side for the inspector.
   *
   * @defaultValue "end"
   */
  placement?: AppShellPlacement;
  /**
   * Scroll behavior for the inspector column.
   *
   * - `fixed` — stays in the viewport while the page scrolls.
   * - `relative` — scrolls with the page in normal document flow.
   *
   * @defaultValue "fixed"
   */
  position?: AppShellRegionPosition;
  /**
   * Initial open state when uncontrolled.
   *
   * @defaultValue false
   */
  defaultOpen?: boolean;
  /**
   * Initial inspector width in pixels.
   *
   * @defaultValue 320
   */
  defaultWidth?: number;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  /** Resizable edge-handle options. Defaults come from `useAppShell()`. */
  resizableProps?: AppShellResizableProps;
}

export interface AppShellInspectorTriggerProps extends Omit<ButtonProps, "children"> {
  /**
   * Inspector side to toggle.
   *
   * @defaultValue "end"
   */
  placement?: AppShellPlacement;
  /** Custom content when no `on` / `off` icons are provided. */
  children?: ReactNode;
  /** Content shown when the region is closed. */
  off?: ReactNode;
  /** Content shown when the region is open. */
  on?: ReactNode;
}

export interface AppShellInspectorHeaderProps extends ComponentProps<"div"> {}

export interface AppShellInspectorContentProps extends ComponentProps<"div"> {}

export interface AppShellInspectorFooterProps extends ComponentProps<"div"> {}

export function AppShellInspector({
  placement = "end",
  position = "fixed",
  defaultOpen = false,
  defaultWidth = 320,
  open: openProp,
  children,
  onOpenChange,
  className,
  style,
  resizableProps: resizablePropsProp,
  ...rest
}: AppShellInspectorProps) {
  const { defaultInspectorResizableProps, inspectorStates, slots } = useAppShell();
  const resizableProps = mergeResizableProps(defaultInspectorResizableProps, resizablePropsProp);
  const side = useRegisteredSideState({
    controlledOpen: openProp,
    defaultOpen,
    onOpenChange,
    placement,
    statesRef: inspectorStates,
  });
  const regionVar = regionVarFor(placement, "inspector");
  const [widthPx, setWidthPx] = useState(defaultWidth);
  const resolvedWidth = side.open ? `${widthPx}px` : "0px";
  const regionResizeCallbacks = useShellRegionResizeCallbacks(regionVar);

  useRegionWidth(regionVar, resolvedWidth);

  return (
    <aside
      {...rest}
      className={cn(
        slots.inspector(),
        placement === "start" ? "border-e" : "border-s",
        regionPositionClasses(slots, position, "column", undefined, "inspector"),
        side.open ? "opacity-100" : "pointer-events-none opacity-0",
        className,
      )}
      data-part="inspector"
      data-placement={placement}
      data-position={position}
      data-scope="app-shell"
      data-state={side.open ? "open" : "closed"}
      style={{ gridArea: gridAreaFor(placement, "inspector"), ...style }}
    >
      {side.open && resizableProps.enabled ? (
        <Resizable.EdgeHandle
          {...regionResizeCallbacks}
          handlePosition={resizableProps.handlePosition}
          label={`Resize ${placement} inspector`}
          onWidthChange={setWidthPx}
          placement={placement}
          width={widthPx}
        />
      ) : null}
      <div className={slots.inline()}>{children}</div>
    </aside>
  );
}

export function AppShellInspectorHeader({ className, ...rest }: AppShellInspectorHeaderProps) {
  const { slots } = useAppShell();

  return (
    <div
      {...rest}
      className={slots.inspectorHeader({ className })}
      data-part="inspector-header"
      data-scope="app-shell"
    />
  );
}

export function AppShellInspectorContent({ className, ...rest }: AppShellInspectorContentProps) {
  const { slots } = useAppShell();

  return (
    <ScrollArea className={slots.scrollArea()}>
      <div
        {...rest}
        className={slots.inspectorContent({ className })}
        data-part="inspector-content"
        data-scope="app-shell"
      />
    </ScrollArea>
  );
}

export function AppShellInspectorFooter({ className, ...rest }: AppShellInspectorFooterProps) {
  const { slots } = useAppShell();

  return (
    <div
      {...rest}
      className={slots.inspectorFooter({ className })}
      data-part="inspector-footer"
      data-scope="app-shell"
    />
  );
}

export function AppShellInspectorTrigger({
  placement = "end",
  children,
  off,
  on,
  onClick,
  className,
  ...rest
}: AppShellInspectorTriggerProps) {
  const { inspectorStates } = useAppShell();
  const open = useAppShellSideOpen(placement, inspectorStates);

  return (
    <AppShellSideTrigger
      {...rest}
      className={className}
      data-part="inspector-trigger"
      defaultOff={<ArrowsOutLineHorizontalIcon />}
      defaultOn={<ArrowsInLineHorizontalIcon />}
      off={off}
      on={on}
      onClick={onClick}
      open={open}
      placement={placement}
      toggle={() => {
        inspectorStates.current[placement]?.toggle();
      }}
    >
      {children}
    </AppShellSideTrigger>
  );
}

// #region Display Names
AppShellInspector.displayName = "AppShell.Inspector";
AppShellInspectorHeader.displayName = "AppShell.InspectorHeader";
AppShellInspectorContent.displayName = "AppShell.InspectorContent";
AppShellInspectorFooter.displayName = "AppShell.InspectorFooter";
AppShellInspectorTrigger.displayName = "AppShell.InspectorTrigger";
// #endregion
