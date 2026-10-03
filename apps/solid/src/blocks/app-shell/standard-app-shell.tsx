/** @jsxImportSource solid-js */

import { standardAppShellBlock } from "@pisagor/recipes/blocks/app-shell";
import { AppShell, Button, useAppShell } from "@pisagor/solid";
import {
  GearIcon,
  HouseIcon,
  MagnifyingGlassIcon,
  SquaresFourIcon,
  UsersIcon,
} from "@pisagor/solid/icons";
import { cn } from "@pisagor/utils";
import type { JSX } from "solid-js";
import { For, Show } from "solid-js";

const styles = standardAppShellBlock();

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

export interface StandardAppShellProps {
  children?: JSX.Element;
  class?: string;
  title?: string;
}

export function StandardAppShell(props: StandardAppShellProps) {
  return (
    <AppShell class={cn(styles.root(), props.class)}>
      <StandardAppShellNavigation />

      <AppShell.Rail defaultActiveRailId="home" placement="start">
        <For each={[...RAIL_ITEMS]}>
          {(item) => (
            <AppShell.RailItem opensPanel railId={item.id} tooltip={item.label}>
              <item.icon aria-hidden />
              <span class={styles.srOnly()}>{item.label}</span>
            </AppShell.RailItem>
          )}
        </For>
      </AppShell.Rail>

      <AppShell.Panel defaultOpen placement="start">
        <AppShell.PanelHeader>
          <ActiveRailTitle />
        </AppShell.PanelHeader>
        <StandardAppShellPanelNav />
      </AppShell.Panel>

      <AppShell.Main>
        <AppShell.Header>
          <AppShell.PanelTrigger
            aria-label="Toggle navigation panel"
            placement="start"
          />
          <h1 class={styles.title()}>{props.title ?? "Dashboard"}</h1>
        </AppShell.Header>
        <AppShell.Content>
          <Show
            fallback={<StandardAppShellPlaceholder />}
            when={props.children}
          >
            {props.children}
          </Show>
        </AppShell.Content>
      </AppShell.Main>

      <AppShell.Inspector placement="end">
        <AppShell.InspectorHeader>
          <h2 class={styles.title()}>Inspector</h2>
        </AppShell.InspectorHeader>
        <AppShell.InspectorContent>
          <p class={styles.inspectorBody()}>
            Contextual details, filters, or metadata go here.
          </p>
        </AppShell.InspectorContent>
      </AppShell.Inspector>
    </AppShell>
  );
}

export function StandardAppShellNavigation() {
  return (
    <AppShell.Navigation>
      <div class={styles.navRow()}>
        <span class={styles.brand()}>Acme</span>
        <nav aria-label="Primary" class={styles.primaryNav()} />
        <div class={styles.navActions()}>
          <AppShell.InspectorTrigger
            aria-label="Toggle inspector"
            placement="end"
          />
        </div>
      </div>
    </AppShell.Navigation>
  );
}

export function StandardAppShellPanelNav(props: { class?: string }) {
  return (
    <AppShell.PanelContent class={props.class}>
      <nav aria-label="Section" class={styles.panelNav()}>
        <For each={[...PANEL_NAV_ITEMS]}>
          {(item) => (
            <Button
              class={styles.panelItem()}
              type="button"
              variant={item.id === "overview" ? "secondary" : "ghost"}
            >
              {item.label}
            </Button>
          )}
        </For>
      </nav>
    </AppShell.PanelContent>
  );
}

function ActiveRailTitle() {
  const { railStates } = useAppShell();
  const activeRailId = () => railStates.current.start?.activeRailId?.();
  const activeItem = () =>
    RAIL_ITEMS.find((item) => item.id === activeRailId());

  return (
    <h2 class={styles.railTitle()}>{activeItem()?.label ?? "Navigation"}</h2>
  );
}

function StandardAppShellPlaceholder() {
  return (
    <div class={styles.placeholder()}>
      <div class={styles.placeholderCopy()}>
        <h2 class={styles.placeholderHeading()}>Welcome back</h2>
        <p class={styles.placeholderText()}>
          Main content area. Replace this block with your page layout.
        </p>
      </div>
      <Button class={styles.placeholderAction()} variant="outline">
        Example action
      </Button>
    </div>
  );
}
