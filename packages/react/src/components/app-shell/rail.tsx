import { appShellRailItemVariants, appShellRailVariants } from "@pisagor/styles/ui/app-shell";
import { cn } from "@pisagor/utils";
import type { ComponentProps } from "react";
import type { WithTestId } from "../../internal/types";
import { Button, type ButtonProps } from "../button";
import { Tooltip, type TooltipProps } from "../tooltip";
import type { AppShellPlacement, AppShellRegionPosition } from "./app-shell.context";
import { useAppShell } from "./app-shell.context";
import { APP_SHELL_RAIL_WIDTH } from "./constants";
import { AppShellRailContext, useAppShellRail } from "./rail.context";
import {
  gridAreaFor,
  regionPositionClasses,
  regionVarFor,
  useRegionWidth,
  useRegisteredRailState,
} from "./region";

export interface AppShellRailProps extends ComponentProps<"aside">, WithTestId {
  activeRailId?: string;
  defaultActiveRailId?: string;
  onActiveRailIdChange?: (id: string) => void;
  /**
   * Grid column side for the rail.
   *
   * @defaultValue "start"
   */
  placement?: AppShellPlacement;
  /**
   * Scroll behavior for the rail column.
   *
   * - `fixed` — stays in the viewport while the page scrolls.
   * - `relative` — scrolls with the page in normal document flow.
   *
   * @defaultValue "fixed"
   */
  position?: AppShellRegionPosition;
}

export interface AppShellRailItemProps extends ButtonProps {
  /** When `railId` is set, marks this item active when it matches the rail's active id. */
  isActive?: boolean;
  /**
   * Opens the panel on the same side as the parent rail when clicked.
   *
   * @defaultValue false
   */
  opensPanel?: boolean;
  /**
   * Which panel side to open when `opensPanel` is true.
   *
   * @defaultValue parent `AppShell.Rail` `placement`
   */
  panelPlacement?: AppShellPlacement;
  railId?: string;
  tooltip?: string | Omit<TooltipProps, "children">;
}

export function AppShellRail({
  placement = "start",
  activeRailId: activeRailIdProp,
  defaultActiveRailId,
  onActiveRailIdChange,
  position = "fixed",
  children,
  className,
  testId,
  style,
  ...rest
}: AppShellRailProps) {
  const { railStates } = useAppShell();
  const regionVar = regionVarFor(placement, "rail");
  const railState = useRegisteredRailState({
    activeRailId: activeRailIdProp,
    defaultActiveRailId,
    onActiveRailIdChange,
    placement,
    statesRef: railStates,
  });

  useRegionWidth(regionVar, APP_SHELL_RAIL_WIDTH);

  return (
    <AppShellRailContext value={railState}>
      <aside
        {...rest}
        className={cn(
          appShellRailVariants(),
          placement === "start" ? "border-e" : "border-s",
          regionPositionClasses(position, "column"),
          className,
        )}
        data-part="rail"
        data-placement={placement}
        data-position={position}
        data-scope="app-shell"
        data-testid={testId}
        style={{ gridArea: gridAreaFor(placement, "rail"), ...style }}
      >
        {children}
      </aside>
    </AppShellRailContext>
  );
}

export function AppShellRailItem({
  isActive,
  opensPanel = false,
  panelPlacement: panelPlacementProp,
  railId,
  tooltip,
  className,
  onClick,
  size = "icon-md",
  variant = "ghost",
  ...rest
}: AppShellRailItemProps) {
  const { activeRailId, placement: railPlacement, setActiveRailId } = useAppShellRail();
  const panelPlacement = panelPlacementProp ?? railPlacement;
  const { panelStates } = useAppShell();
  const active = isActive ?? (railId !== undefined && activeRailId === railId);

  const button = (
    <Button
      {...rest}
      aria-current={active ? "page" : undefined}
      className={appShellRailItemVariants({ className })}
      clickEffect={false}
      data-active={active}
      data-part="rail-item"
      data-rail-id={railId}
      data-scope="app-shell"
      onClick={(event) => {
        onClick?.(event);
        if (railId) {
          setActiveRailId(railId);
        }
        if (opensPanel) {
          panelStates.current[panelPlacement]?.setOpen(true);
        }
      }}
      size={size}
      variant={variant}
    />
  );

  if (!tooltip) {
    return button;
  }

  const tooltipProps = typeof tooltip === "string" ? { content: tooltip } : tooltip;

  return (
    <Tooltip
      positioning={{
        placement: railPlacement === "end" ? "left" : "right",
        ...tooltipProps.positioning,
      }}
      {...tooltipProps}
    >
      {button}
    </Tooltip>
  );
}

// #region Display Names
AppShellRail.displayName = "AppShell.Rail";
AppShellRailItem.displayName = "AppShell.RailItem";
// #endregion
