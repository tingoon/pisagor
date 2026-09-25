import { AppShell } from "..";
import { mainContent, regionTitle } from "./helpers";

export function Default() {
  return (
    <AppShell>
      <AppShell.Banner>{regionTitle("Banner")}</AppShell.Banner>

      <AppShell.Navigation>{regionTitle("Navigation")}</AppShell.Navigation>

      <AppShell.Rail defaultActiveRailId="home" placement="start">
        <AppShell.RailItem opensPanel railId="home" tooltip="Home">
          H
        </AppShell.RailItem>
        <AppShell.RailItem opensPanel railId="search" tooltip="Search">
          S
        </AppShell.RailItem>
      </AppShell.Rail>

      <AppShell.Panel defaultOpen>
        <AppShell.PanelContent>
          {regionTitle("Start panel")}
        </AppShell.PanelContent>
      </AppShell.Panel>

      <AppShell.Main>
        <AppShell.Header>
          <AppShell.PanelTrigger aria-label="Toggle start panel" />
          <div className="flex min-w-0 flex-1 justify-center">
            {regionTitle("Header")}
          </div>
        </AppShell.Header>
        {mainContent("Content")}
      </AppShell.Main>

      <AppShell.Rail defaultActiveRailId="notes" placement="end">
        <AppShell.RailItem railId="notes" tooltip="Notes">
          N
        </AppShell.RailItem>
        <AppShell.RailItem railId="chat" tooltip="Chat">
          C
        </AppShell.RailItem>
      </AppShell.Rail>
    </AppShell>
  );
}
