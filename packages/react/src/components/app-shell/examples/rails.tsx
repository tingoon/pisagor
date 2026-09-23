import { useAppShell } from "@pisagor/react";
import { AppShell } from "..";
import { mainContent, regionTitle } from "./helpers";

function ActiveRailPanelContent() {
  const { railStates } = useAppShell();
  const activeRailId = railStates.current.start?.activeRailId;

  return (
    <AppShell.PanelContent>
      {regionTitle(activeRailId ? `Panel: ${activeRailId}` : "Panel")}
    </AppShell.PanelContent>
  );
}

export function Rails() {
  return (
    <AppShell>
      <AppShell.Rail defaultActiveRailId="home" placement="start">
        <AppShell.RailItem opensPanel railId="home" tooltip="Home">
          H
        </AppShell.RailItem>
        <AppShell.RailItem opensPanel railId="search" tooltip="Search">
          S
        </AppShell.RailItem>
        <AppShell.RailItem opensPanel railId="settings" tooltip="Settings">
          G
        </AppShell.RailItem>
      </AppShell.Rail>

      <AppShell.Panel placement="start">
        <ActiveRailPanelContent />
      </AppShell.Panel>

      <AppShell.Main>
        <AppShell.Header>{regionTitle("Header")}</AppShell.Header>
        {mainContent("Main")}
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
