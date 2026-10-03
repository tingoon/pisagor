<script lang="ts">
import { standardAppShellBlock } from "@pisagor/recipes/blocks/app-shell";
import { AppShell, Button } from "@pisagor/svelte";
import { cn } from "@pisagor/utils";
import GearIcon from "phosphor-svelte/lib/GearIcon";
import HouseIcon from "phosphor-svelte/lib/HouseIcon";
import MagnifyingGlassIcon from "phosphor-svelte/lib/MagnifyingGlassIcon";
import SquaresFourIcon from "phosphor-svelte/lib/SquaresFourIcon";
import UsersIcon from "phosphor-svelte/lib/UsersIcon";
import type { Snippet } from "svelte";
import ActiveRailTitle from "./active-rail-title.svelte";

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

interface Props {
  children?: Snippet;
  class?: string;
  title?: string;
}

let { children, class: className, title = "Dashboard" }: Props = $props();
</script>

<AppShell class={cn(styles.root(), className)}>
  <AppShell.Navigation>
    <div class={styles.navRow()}>
      <span class={styles.brand()}>Acme</span>
      <nav aria-label="Primary" class={styles.primaryNav()}></nav>
      <div class={styles.navActions()}>
        <AppShell.InspectorTrigger
          aria-label="Toggle inspector"
          placement="end"
        />
      </div>
    </div>
  </AppShell.Navigation>

  <AppShell.Rail defaultActiveRailId="home" placement="start">
    {#each RAIL_ITEMS as item}
      <AppShell.RailItem opensPanel railId={item.id} tooltip={item.label}>
        <item.icon aria-hidden />
        <span class={styles.srOnly()}>{item.label}</span>
      </AppShell.RailItem>
    {/each}
  </AppShell.Rail>

  <AppShell.Panel defaultOpen placement="start">
    <AppShell.PanelHeader>
      <ActiveRailTitle />
    </AppShell.PanelHeader>
    <AppShell.PanelContent>
      <nav aria-label="Section" class={styles.panelNav()}>
        {#each PANEL_NAV_ITEMS as item}
          <Button
            class={styles.panelItem()}
            type="button"
            variant={item.id === "overview" ? "secondary" : "ghost"}
          >
            {item.label}
          </Button>
        {/each}
      </nav>
    </AppShell.PanelContent>
  </AppShell.Panel>

  <AppShell.Main>
    <AppShell.Header>
      <AppShell.PanelTrigger
        aria-label="Toggle navigation panel"
        placement="start"
      />
      <h1 class={styles.title()}>{title}</h1>
    </AppShell.Header>
    <AppShell.Content>
      {#if children}
        {@render children()}
      {:else}
        <div class={styles.placeholder()}>
          <div class={styles.placeholderCopy()}>
            <h2 class={styles.placeholderHeading()}>Welcome back</h2>
            <p class={styles.placeholderText()}>
              Main content area. Replace this block with your page layout.
            </p>
          </div>
          <Button class={styles.placeholderAction()} variant="outline"
            >Example action</Button
          >
        </div>
      {/if}
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
