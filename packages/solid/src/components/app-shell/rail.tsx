import { cn } from "@pisagor/utils";
import type { ComponentProps, JSX } from "solid-js";
import { Show, splitProps } from "solid-js";
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
  placement?: AppShellPlacement;
  position?: AppShellRegionPosition;
  activeRailId?: string;
  defaultActiveRailId?: string;
  onActiveRailIdChange?: (id: string) => void;
}

export interface AppShellRailItemProps extends ButtonProps {
  isActive?: boolean;
  opensPanel?: boolean;
  panelPlacement?: AppShellPlacement;
  railId?: string;
  tooltip?: string | Omit<TooltipProps, "children">;
}

export function AppShellRail(props: AppShellRailProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "placement",
    "position",
    "defaultActiveRailId",
    "activeRailId",
    "children",
    "onActiveRailIdChange",
    "class",
    "style",
  ]);
  const placement = () => local.placement ?? "start";
  const position = () => local.position ?? "fixed";
  const { railStates, slots } = useAppShell();
  const regionVar = regionVarFor(placement(), "rail");
  const railState = useRegisteredRailState({
    defaultActiveRailId: local.defaultActiveRailId,
    getActiveRailId: () => local.activeRailId,
    onActiveRailIdChange: local.onActiveRailIdChange,
    placement: placement(),
    statesRef: railStates,
  });

  useRegionWidth(regionVar, () => APP_SHELL_RAIL_WIDTH);

  return (
    <AppShellRailContext value={railState}>
      <aside
        {...rest}
        class={cn(
          slots.rail(),
          placement() === "start" ? "border-e" : "border-s",
          regionPositionClasses(slots, position(), "column"),
          local.class,
        )}
        data-part="rail"
        data-placement={placement()}
        data-position={position()}
        data-scope="app-shell"
        style={{
          "grid-area": gridAreaFor(placement(), "rail"),
          ...(typeof local.style === "object" && local.style && !Array.isArray(local.style)
            ? (local.style as Record<string, string>)
            : {}),
        }}
      >
        {local.children}
      </aside>
    </AppShellRailContext>
  );
}

export function AppShellRailItem(props: AppShellRailItemProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "panelPlacement",
    "size",
    "variant",
    "isActive",
    "opensPanel",
    "railId",
    "tooltip",
    "onClick",
    "class",
    "children",
  ]);
  const { activeRailId, placement: railPlacement, setActiveRailId } = useAppShellRail();
  const panelPlacement = () => local.panelPlacement ?? railPlacement;
  const { panelStates, slots } = useAppShell();
  const active = () =>
    local.isActive ?? (local.railId !== undefined && activeRailId() === local.railId);

  const button = (
    <Button
      {...rest}
      aria-current={active() ? "page" : undefined}
      class={slots.railItem({ class: local.class })}
      clickEffect={false}
      data-active={active()}
      data-part="rail-item"
      data-rail-id={local.railId}
      data-scope="app-shell"
      onClick={(event) => {
        if (typeof local.onClick === "function") local.onClick(event);
        if (local.railId) setActiveRailId(local.railId);
        if (local.opensPanel) {
          panelStates.current[panelPlacement()]?.setOpen(true);
        }
      }}
      size={local.size ?? "icon-md"}
      variant={local.variant ?? "ghost"}
    >
      {local.children}
    </Button>
  );

  return (
    <Show fallback={button} when={local.tooltip}>
      {(tip) => {
        const tooltipProps =
          typeof tip() === "string"
            ? ({ content: tip() as string } as Omit<TooltipProps, "children">)
            : (tip() as Omit<TooltipProps, "children">);
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
      }}
    </Show>
  );
}
