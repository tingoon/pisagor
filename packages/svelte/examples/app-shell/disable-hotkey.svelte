<script lang="ts">
  import { AppShell } from "@pisagor/svelte";
</script>

<AppShell disableHotkey>
  <AppShell.Panel defaultOpen placement="start">
    <AppShell.PanelContent>
      <div class="p-3 text-sm">Start panel</div>
    </AppShell.PanelContent>
  </AppShell.Panel>

  <AppShell.Main>
    <AppShell.Header>
      <AppShell.PanelTrigger
        aria-label="Toggle start panel"
        placement="start"
      />
    </AppShell.Header>
    <AppShell.Content>
      <div class="p-4 text-sm">Main</div>
    </AppShell.Content>
  </AppShell.Main>
</AppShell>
