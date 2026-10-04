<script lang="ts">
import { AppShell } from "@pisagor/svelte";
import { loremParagraphs } from "./helpers";

const paragraphs = loremParagraphs(8);
</script>

<AppShell>
  <AppShell.Rail defaultActiveRailId="home" placement="start">
    <AppShell.RailItem opensPanel railId="home" tooltip="Home"
      >H</AppShell.RailItem
    >
    <AppShell.RailItem opensPanel railId="search" tooltip="Search"
      >S</AppShell.RailItem
    >
    <AppShell.RailItem opensPanel railId="settings" tooltip="Settings"
      >G</AppShell.RailItem
    >
  </AppShell.Rail>

  <AppShell.Panel placement="start">
    <AppShell.PanelContent>
      <div class="flex min-h-12 items-center justify-center">
        <h6 class="text-center leading-4">Panel</h6>
      </div>
    </AppShell.PanelContent>
  </AppShell.Panel>

  <AppShell.Main>
    <AppShell.Header>
      <div class="flex min-h-12 w-full items-center justify-center">
        <h6 class="text-center leading-4">Header</h6>
      </div>
    </AppShell.Header>
    <AppShell.Content>
      <h6 class="mb-2">Main</h6>
      {#each paragraphs as paragraph}
        <p class="text-[15px]">{paragraph}</p>
      {/each}
    </AppShell.Content>
  </AppShell.Main>

  <AppShell.Rail defaultActiveRailId="notes" placement="end">
    <AppShell.RailItem railId="notes" tooltip="Notes">N</AppShell.RailItem>
    <AppShell.RailItem railId="chat" tooltip="Chat">C</AppShell.RailItem>
  </AppShell.Rail>
</AppShell>
