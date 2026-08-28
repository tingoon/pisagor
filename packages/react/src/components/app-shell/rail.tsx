import type { ComponentProps } from "react";
import { cn } from "../../internal/utils";
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

export interface AppShellRailProps extends ComponentProps<"aside"> {
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
  activeRailId?: string;
  defaultActiveRailId?: string;
  onActiveRailIdChange?: (id: string) => void;
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
  position = "fixed",
  defaultActiveRailId,
  activeRailId: activeRailIdProp,
  children,
  onActiveRailIdChange,
  className,
  style,
  ...rest
}: AppShellRailProps) {
  const { railStates, slots } = useAppShell();
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
          slots.rail(),
          placement === "start" ? "border-e" : "border-s",
          regionPositionClasses(slots, position, "column"),
          className,
        )}
        data-part="rail"
        data-placement={placement}
        data-position={position}
        data-scope="app-shell"
        style={{ gridArea: gridAreaFor(placement, "rail"), ...style }}
      >
        {children}
      </aside>
    </AppShellRailContext>
  );
}

export function AppShellRailItem({
  panelPlacement: panelPlacementProp,
  size = "icon-md",
  variant = "ghost",
  isActive,
  opensPanel = false,
  railId,
  tooltip,
  onClick,
  className,
  ...rest
}: AppShellRailItemProps) {
  const { activeRailId, placement: railPlacement, setActiveRailId } = useAppShellRail();
  const panelPlacement = panelPlacementProp ?? railPlacement;
  const { panelStates, slots } = useAppShell();
  const active = isActive ?? (railId !== undefined && activeRailId === railId);

  const button = (
    <Button
      {...rest}
      aria-current={active ? "page" : undefined}
      className={slots.railItem({ className })}
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
      {...tooltipProps}
      positioning={{
        placement: railPlacement === "end" ? "left" : "right",
        ...tooltipProps.positioning,
      }}
    >
      {button}
    </Tooltip>
  );
}

// #region Display Names
AppShellRail.displayName = "AppShell.Rail";
AppShellRailItem.displayName = "AppShell.RailItem";
// #endregion
