import { AppShell } from "@pisagor/react";
import { mainContent, regionTitle } from "./helpers";

export function DisableHotkey() {
  return (
    <AppShell disableHotkey>
      <AppShell.Panel defaultOpen placement="start">
        <AppShell.PanelContent>
          {regionTitle("Start panel")}
        </AppShell.PanelContent>
      </AppShell.Panel>

      <AppShell.Main>
        <AppShell.Header>
          <AppShell.PanelTrigger
            aria-label="Toggle start panel"
            placement="start"
          />
        </AppShell.Header>
        {mainContent("Main")}
      </AppShell.Main>
    </AppShell>
  );
}
