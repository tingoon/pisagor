import {
  GearIcon,
  HouseIcon,
  MagnifyingGlassIcon,
  SquaresFourIcon,
  UsersIcon,
} from "@phosphor-icons/react";
import { AppShell, useAppShell } from "@pisagor/react/app-shell";
import { Button } from "@pisagor/react/button";
import { cn } from "@pisagor/utils";
import type { ComponentProps, ReactNode } from "react";

const RAIL_ITEMS = [
  { icon: HouseIcon, id: "home", label: "Home" },
  { icon: SquaresFourIcon, id: "projects", label: "Projects" },
  { icon: UsersIcon, id: "team", label: "Team" },
  { icon: MagnifyingGlassIcon, id: "search", label: "Search" },
  { icon: GearIcon, id: "settings", label: "Settings" },
] as const;

const PANEL_NAV_ITEMS = [
  { id: "overview", label: "Overview" },
  { id: "activity", label: "Activity" },
  { id: "members", label: "Members" },
  { id: "settings", label: "Settings" },
] as const;

export interface StandardAppShellProps extends ComponentProps<"div"> {
  /** Main page content. Falls back to a placeholder when omitted. */
  children?: ReactNode;
  /** Page title shown in the main header. */
  title?: string;
}

export function StandardAppShell({
  children,
  className,
  title = "Dashboard",
  ...rest
}: StandardAppShellProps) {
  return (
    <AppShell className={cn("min-h-svh", className)} {...rest}>
      <StandardAppShellNavigation />

      <AppShell.Rail defaultActiveRailId="home" placement="start">
        {RAIL_ITEMS.map(({ icon: Icon, id, label }) => (
          <AppShell.RailItem key={id} opensPanel railId={id} tooltip={label}>
            <Icon aria-hidden />
            <span className="sr-only">{label}</span>
          </AppShell.RailItem>
        ))}
      </AppShell.Rail>

      <AppShell.Panel defaultOpen placement="start">
        <AppShell.PanelHeader>
          <ActiveRailTitle />
        </AppShell.PanelHeader>
        <StandardAppShellPanelNav />
      </AppShell.Panel>

      <AppShell.Main>
        <AppShell.Header>
          <AppShell.PanelTrigger aria-label="Toggle navigation panel" placement="start" />
          <h1 className="font-medium text-sm">{title}</h1>
        </AppShell.Header>
        <AppShell.Content>{children ?? <StandardAppShellPlaceholder />}</AppShell.Content>
      </AppShell.Main>

      <AppShell.Inspector placement="end">
        <AppShell.InspectorHeader>
          <h2 className="font-medium text-sm">Inspector</h2>
        </AppShell.InspectorHeader>
        <AppShell.InspectorContent>
          <p className="text-muted-foreground text-sm">
            Contextual details, filters, or metadata go here.
          </p>
        </AppShell.InspectorContent>
      </AppShell.Inspector>
    </AppShell>
  );
}

/** Top navigation row — extend with primary links, search, and account menus. */
export function StandardAppShellNavigation() {
  return (
    <AppShell.Navigation>
      <div className="flex w-full items-center gap-4">
        <span className="font-semibold">Acme</span>

        <nav aria-label="Primary" className="flex flex-1 items-center gap-1">
          {/* Add primary navigation links or dropdown menus here. */}
        </nav>

        <div className="flex items-center gap-2">
          <AppShell.InspectorTrigger aria-label="Toggle inspector" placement="end" />
          {/* Add search, notifications, theme, and account menus here. */}
        </div>
      </div>
    </AppShell.Navigation>
  );
}

/** Side panel navigation — replace items or wire up routing. */
export function StandardAppShellPanelNav({ className }: { className?: string }) {
  return (
    <AppShell.PanelContent className={className}>
      <nav aria-label="Section" className="flex flex-col gap-1">
        {PANEL_NAV_ITEMS.map((item) => (
          <Button
            className="justify-start"
            key={item.id}
            type="button"
            variant={item.id === "overview" ? "secondary" : "ghost"}
          >
            {item.label}
          </Button>
        ))}
      </nav>
    </AppShell.PanelContent>
  );
}

function ActiveRailTitle() {
  const { railStates } = useAppShell();
  const activeRailId = railStates.current.start?.activeRailId;
  const activeItem = RAIL_ITEMS.find((item) => item.id === activeRailId);

  return <h2 className="font-medium text-sm">{activeItem?.label ?? "Navigation"}</h2>;
}

function StandardAppShellPlaceholder() {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-muted-foreground text-sm">
        Main content area. Replace this block with your page layout.
      </p>
      <Button className="w-fit" variant="outline">
        Example action
      </Button>
    </div>
  );
}
