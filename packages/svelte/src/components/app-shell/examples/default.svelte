<script lang="ts">
import { AppShell } from "..";
</script>

<AppShell>
  <AppShell.Banner>
    <span class="px-3 py-2 text-sm font-medium">Banner</span>
  </AppShell.Banner>

  <AppShell.Navigation>
    <span class="px-3 py-2 text-sm font-medium">Navigation</span>
  </AppShell.Navigation>

  <AppShell.Rail defaultActiveRailId="home" placement="start">
    <AppShell.RailItem opensPanel railId="home" tooltip="Home">H</AppShell.RailItem>
    <AppShell.RailItem opensPanel railId="search" tooltip="Search">S</AppShell.RailItem>
  </AppShell.Rail>

  <AppShell.Panel defaultOpen>
    <AppShell.PanelContent>
      <div class="p-3 text-sm">Start panel</div>
    </AppShell.PanelContent>
  </AppShell.Panel>

  <AppShell.Main>
    <AppShell.Header>
      <AppShell.PanelTrigger aria-label="Toggle start panel" />
      <div class="flex min-w-0 flex-1 justify-center text-sm font-medium">Header</div>
    </AppShell.Header>
    <AppShell.Content>
      <div class="p-4 text-sm text-muted-foreground">Content</div>
    </AppShell.Content>
  </AppShell.Main>

  <AppShell.Rail defaultActiveRailId="notes" placement="end">
    <AppShell.RailItem railId="notes" tooltip="Notes">N</AppShell.RailItem>
    <AppShell.RailItem railId="chat" tooltip="Chat">C</AppShell.RailItem>
  </AppShell.Rail>
</AppShell>
