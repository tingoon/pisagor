import source from "./navigation.tsx?raw";
import { AppShell } from "@pisagor/solid";
import { mainContent, regionTitle } from "./helpers";

export function Navigation() {
  return (
    <AppShell>
      <AppShell.Navigation>{regionTitle("Navigation")}</AppShell.Navigation>
      <AppShell.Main>{mainContent("Main")}</AppShell.Main>
    </AppShell>
  );
}

export { source as NavigationSource };
