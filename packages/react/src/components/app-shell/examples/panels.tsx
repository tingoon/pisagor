import { AppShell } from "..";
import { mainContent, regionTitle } from "./helpers";

export function Panels() {
  return (
    <AppShell>
      <AppShell.Navigation>{regionTitle("Navigation")}</AppShell.Navigation>

      <AppShell.Panel defaultOpen placement="start">
        <AppShell.PanelHeader>
          {regionTitle("Start panel header")}
        </AppShell.PanelHeader>
        <AppShell.PanelContent>
          {regionTitle("Start panel")}
        </AppShell.PanelContent>
        <AppShell.PanelFooter>
          {regionTitle("Start panel footer")}
        </AppShell.PanelFooter>
      </AppShell.Panel>

      <AppShell.Main>
        <AppShell.Header>
          <AppShell.PanelTrigger
            aria-label="Toggle start panel"
            placement="start"
          />
          <AppShell.PanelTrigger
            aria-label="Toggle end panel"
            placement="end"
          />
        </AppShell.Header>
        {mainContent("Main")}
      </AppShell.Main>

      <AppShell.Panel defaultOpen placement="end">
        <AppShell.PanelHeader>
          {regionTitle("End panel header")}
        </AppShell.PanelHeader>
        <AppShell.PanelContent>
          {regionTitle("End panel")}
        </AppShell.PanelContent>
        <AppShell.PanelFooter>
          {regionTitle("End panel footer")}
        </AppShell.PanelFooter>
      </AppShell.Panel>
    </AppShell>
  );
}
