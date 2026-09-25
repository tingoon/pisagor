import { AppShell } from "../index";

export function Default() {
  return (
    <AppShell class="min-h-64 border">
      <AppShell.Banner class="bg-muted px-4 py-2 text-sm">Banner</AppShell.Banner>
      <AppShell.Navigation class="border-b px-4 py-2 text-sm">Navigation</AppShell.Navigation>
      <AppShell.Rail placement="start">
        <AppShell.RailItem railId="home" tooltip="Home">
          H
        </AppShell.RailItem>
      </AppShell.Rail>
      <AppShell.Panel defaultOpen placement="start">
        <AppShell.PanelHeader>Panel</AppShell.PanelHeader>
        <AppShell.PanelContent>Side content</AppShell.PanelContent>
      </AppShell.Panel>
      <AppShell.Main>
        <AppShell.Header class="border-b px-4 py-2">
          <AppShell.PanelTrigger />
          Header
        </AppShell.Header>
        <AppShell.Content class="p-4">Main content</AppShell.Content>
      </AppShell.Main>
    </AppShell>
  );
}
