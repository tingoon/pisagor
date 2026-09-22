import { AppShell } from "..";
import { mainContent, regionTitle } from "./helpers";

export function Content() {
  return (
    <AppShell>
      <AppShell.Navigation>{regionTitle("Navigation")}</AppShell.Navigation>
      <AppShell.Main>
        <AppShell.Header>{regionTitle("Header")}</AppShell.Header>
        {mainContent("Content")}
      </AppShell.Main>
    </AppShell>
  );
}
