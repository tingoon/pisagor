import { ArrowsInLineHorizontalIcon, ArrowsOutLineHorizontalIcon } from "@phosphor-icons/react";
import {
  appShellInline2Variants,
  appShellInlineVariants,
  appShellInspectorContentVariants,
  appShellInspectorFooterVariants,
  appShellInspectorHeaderVariants,
  appShellInspectorVariants,
} from "@pisagor/styles/ui/app-shell";
import { cn } from "@pisagor/utils";
import type { ComponentProps, ReactNode } from "react";
import { useState } from "react";
import type { WithTestId } from "../../internal/types";
import type { ButtonProps } from "../button";
import { Resizable } from "../resizable";
import { ScrollArea } from "../scroll-area";
import type { AppShellPlacement, AppShellRegionPosition, AppShellResizableProps } from "./context";
import { useAppShell } from "./context";
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

interface AppShellInspectorProps extends ComponentProps<"aside">, WithTestId {
  /**
   * Initial inspector width in pixels.
   *
   * @defaultValue 320
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
  /** Resizable edge-handle options. Defaults come from `useAppShell()`. */
  resizableProps?: AppShellResizableProps;
}

interface AppShellInspectorTriggerProps extends Omit<ButtonProps, "children"> {
  /** Custom content when no `on` / `off` icons are provided. */
  children?: ReactNode;
  /** Content shown when the region is open. */
  on?: ReactNode;
  /** Content shown when the region is closed. */
  off?: ReactNode;
  /**
   * Inspector side to toggle.
   *
   * @defaultValue "end"
   */
  placement?: AppShellPlacement;
}

export function AppShellInspector({
  placement = "end",
  defaultOpen = false,
  open: openProp,
  onOpenChange,
  position = "fixed",
  defaultWidth = 320,
  resizableProps: resizablePropsProp,
  children,
  className,
  testId,
  style,
  ...rest
}: AppShellInspectorProps) {
  const { defaultInspectorResizableProps, inspectorStates } = useAppShell();
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
        appShellInspectorVariants(),
        placement === "start" ? "border-e" : "border-s",
        regionPositionClasses(position, "column", undefined, "inspector"),
        side.open ? "opacity-100" : "pointer-events-none opacity-0",
        className,
      )}
      data-part="inspector"
      data-placement={placement}
      data-position={position}
      data-scope="app-shell"
      data-state={side.open ? "open" : "closed"}
      data-testid={testId}
      style={{ gridArea: gridAreaFor(placement, "inspector"), ...style }}
    >
      {side.open && resizableProps.enabled ? (
        <Resizable.EdgeHandle
          handlePosition={resizableProps.handlePosition}
          label={`Resize ${placement} inspector`}
          onWidthChange={setWidthPx}
          placement={placement}
          width={widthPx}
          {...regionResizeCallbacks}
        />
      ) : null}
      <div className={appShellInlineVariants()}>{children}</div>
    </aside>
  );
}
AppShellInspector.displayName = "AppShell.Inspector";

export function AppShellInspectorHeader({ className, ...rest }: ComponentProps<"div">) {
  return (
    <div
      {...rest}
      className={cn(appShellInspectorHeaderVariants(), className)}
      data-part="inspector-header"
      data-scope="app-shell"
    />
  );
}
AppShellInspectorHeader.displayName = "AppShell.InspectorHeader";

export function AppShellInspectorContent({ className, ...rest }: ComponentProps<"div">) {
  return (
    <ScrollArea className={appShellInline2Variants()}>
      <div
        {...rest}
        className={cn(appShellInspectorContentVariants(), className)}
        data-part="inspector-content"
        data-scope="app-shell"
      />
    </ScrollArea>
  );
}
AppShellInspectorContent.displayName = "AppShell.InspectorContent";

export function AppShellInspectorFooter({ className, ...rest }: ComponentProps<"div">) {
  return (
    <div
      {...rest}
      className={cn(appShellInspectorFooterVariants(), className)}
      data-part="inspector-footer"
      data-scope="app-shell"
    />
  );
}
AppShellInspectorFooter.displayName = "AppShell.InspectorFooter";

export function AppShellInspectorTrigger({
  placement = "end",
  children,
  className,
  on,
  off,
  onClick,
  ...rest
}: AppShellInspectorTriggerProps) {
  const { inspectorStates } = useAppShell();
  const open = useAppShellSideOpen(placement, inspectorStates);

  return (
    <AppShellSideTrigger
      {...rest}
      className={className}
      dataPart="inspector-trigger"
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
AppShellInspectorTrigger.displayName = "AppShell.InspectorTrigger";
