import { AppShell } from "@pisagor/solid";

export function DisableHotkey() {
  return (
    <AppShell class="min-h-64 border" disableHotkey>
      <AppShell.Panel defaultOpen placement="start">
        <AppShell.PanelContent>Start panel</AppShell.PanelContent>
      </AppShell.Panel>
      <AppShell.Main>
        <AppShell.Header class="border-b px-4 py-2">
          <AppShell.PanelTrigger
            aria-label="Toggle start panel"
            placement="start"
          />
        </AppShell.Header>
        <AppShell.Content class="p-4">Main</AppShell.Content>
      </AppShell.Main>
    </AppShell>
  );
}
