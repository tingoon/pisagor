import { AppShell } from "..";
import { mainContent, regionTitle } from "./helpers";

export function Inspectors() {
  return (
    <AppShell>
      <AppShell.Navigation>
        <div className="flex items-center gap-2">
          <AppShell.InspectorTrigger
            aria-label="Toggle start inspector"
            placement="start"
          />
          {regionTitle("Navigation")}
          <AppShell.InspectorTrigger
            aria-label="Toggle end inspector"
            placement="end"
          />
        </div>
      </AppShell.Navigation>

      <AppShell.Inspector defaultOpen placement="start">
        <AppShell.InspectorHeader>
          {regionTitle("Start inspector header")}
        </AppShell.InspectorHeader>
        <AppShell.InspectorContent>
          {regionTitle("Start inspector")}
        </AppShell.InspectorContent>
        <AppShell.InspectorFooter>
          {regionTitle("Start inspector footer")}
        </AppShell.InspectorFooter>
      </AppShell.Inspector>

      <AppShell.Main>{mainContent("Main")}</AppShell.Main>

      <AppShell.Inspector defaultOpen placement="end">
        <AppShell.InspectorHeader>
          {regionTitle("End inspector header")}
        </AppShell.InspectorHeader>
        <AppShell.InspectorContent>
          {regionTitle("End inspector")}
        </AppShell.InspectorContent>
        <AppShell.InspectorFooter>
          {regionTitle("End inspector footer")}
        </AppShell.InspectorFooter>
      </AppShell.Inspector>
    </AppShell>
  );
}
