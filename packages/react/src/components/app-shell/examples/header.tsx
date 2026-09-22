import { AppShell } from "..";
import { mainContent, regionTitle } from "./helpers";

export function Header() {
  return (
    <AppShell>
      <AppShell.Navigation>
        <div className="flex items-center gap-2">
          {regionTitle("Navigation")}
          <AppShell.InspectorTrigger aria-label="Toggle end inspector" placement="end" />
        </div>
      </AppShell.Navigation>

      <AppShell.Panel defaultOpen placement="start">
        <AppShell.PanelContent>{regionTitle("Start panel")}</AppShell.PanelContent>
      </AppShell.Panel>

      <AppShell.Inspector defaultOpen placement="end">
        <AppShell.InspectorContent>{regionTitle("End inspector")}</AppShell.InspectorContent>
      </AppShell.Inspector>

      <AppShell.Main>
        <AppShell.Header>
          <AppShell.PanelTrigger aria-label="Toggle start panel" placement="start" />
          <div className="flex min-w-0 flex-1 justify-center">{regionTitle("Header")}</div>
        </AppShell.Header>
        {mainContent("Main")}
      </AppShell.Main>
    </AppShell>
  );
}
