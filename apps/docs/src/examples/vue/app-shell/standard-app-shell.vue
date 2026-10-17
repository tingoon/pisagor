<script lang="ts" setup>
import {
  PhGear,
  PhHouse,
  PhMagnifyingGlass,
  PhSquaresFour,
  PhUsers,
} from "@phosphor-icons/vue";
import { cn } from "@pisagor/utils";
import { AppShell, Button } from "@pisagor/vue";
import { standardAppShellBlock } from "#/recipes/blocks/app-shell";
import ActiveRailTitle from "./active-rail-title.vue";

defineOptions({ inheritAttrs: false });

const props = withDefaults(
  defineProps<{
    /** Page title shown in the main header. */
    title?: string;
    /** Root class override. */
    class?: unknown;
  }>(),
  { class: undefined, title: "Dashboard" },
);

const styles = standardAppShellBlock();

const RAIL_ITEMS = [
  { icon: PhHouse, id: "home", label: "Home" },
  { icon: PhSquaresFour, id: "projects", label: "Projects" },
  { icon: PhUsers, id: "team", label: "Team" },
  { icon: PhMagnifyingGlass, id: "search", label: "Search" },
  { icon: PhGear, id: "settings", label: "Settings" },
] as const;

const PANEL_NAV_ITEMS = [
  { id: "overview", label: "Overview" },
  { id: "activity", label: "Activity" },
  { id: "members", label: "Members" },
  { id: "settings", label: "Settings" },
] as const;
</script>

<template>
  <AppShell v-bind="$attrs" :class="cn(styles.root(), props.class)">
    <!-- Top navigation row — extend with primary links, search, and account menus. -->
    <AppShell.Navigation>
      <div :class="styles.navRow()">
        <span :class="styles.brand()">Acme</span>
        <nav aria-label="Primary" :class="styles.primaryNav()" />
        <div :class="styles.navActions()">
          <AppShell.InspectorTrigger
            aria-label="Toggle inspector"
            placement="end"
          />
        </div>
      </div>
    </AppShell.Navigation>

    <AppShell.Rail default-active-rail-id="home" placement="start">
      <AppShell.RailItem
        opens-panel
        v-for="item in RAIL_ITEMS"
        :key="item.id"
        :rail-id="item.id"
        :tooltip="item.label"
      >
        <component aria-hidden="true" :is="item.icon" />
        <span :class="styles.srOnly()">{{ item.label }}</span>
      </AppShell.RailItem>
    </AppShell.Rail>

    <AppShell.Panel default-open placement="start">
      <AppShell.PanelHeader>
        <ActiveRailTitle :items="RAIL_ITEMS" />
      </AppShell.PanelHeader>
      <!-- Side panel navigation — replace items or wire up routing. -->
      <AppShell.PanelContent>
        <nav aria-label="Section" :class="styles.panelNav()">
          <Button
            type="button"
            v-for="item in PANEL_NAV_ITEMS"
            :key="item.id"
            :class="styles.panelItem()"
            :variant="item.id === 'overview' ? 'secondary' : 'ghost'"
          >
            {{ item.label }}
          </Button>
        </nav>
      </AppShell.PanelContent>
    </AppShell.Panel>

    <AppShell.Main>
      <AppShell.Header>
        <AppShell.PanelTrigger
          aria-label="Toggle navigation panel"
          placement="start"
        />
        <h1 :class="styles.title()">{{ props.title }}</h1>
      </AppShell.Header>
      <AppShell.Content>
        <slot>
          <div :class="styles.placeholder()">
            <div :class="styles.placeholderCopy()">
              <h2 :class="styles.placeholderHeading()">Welcome back</h2>
              <p :class="styles.placeholderText()">
                Main content area. Replace this block with your page layout.
              </p>
            </div>
            <Button variant="outline" :class="styles.placeholderAction()">
              Example action
            </Button>
          </div>
        </slot>
      </AppShell.Content>
    </AppShell.Main>

    <AppShell.Inspector placement="end">
      <AppShell.InspectorHeader>
        <h2 :class="styles.title()">Inspector</h2>
      </AppShell.InspectorHeader>
      <AppShell.InspectorContent>
        <p :class="styles.inspectorBody()">
          Contextual details, filters, or metadata go here.
        </p>
      </AppShell.InspectorContent>
    </AppShell.Inspector>
  </AppShell>
</template>
