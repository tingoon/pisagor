import { AppShell } from "@pisagor/react/app-shell";
import { mainContent, regionTitle } from "./helpers";

export function Navigation() {
  return (
    <AppShell>
      <AppShell.Navigation>{regionTitle("Navigation")}</AppShell.Navigation>
      <AppShell.Main>{mainContent("Main")}</AppShell.Main>
    </AppShell>
  );
}
