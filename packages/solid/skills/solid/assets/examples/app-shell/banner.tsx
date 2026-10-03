/** @jsxImportSource solid-js */

import { Announcement, Badge, Button } from "@pisagor/solid";
import { AppShell } from "@pisagor/solid/app-shell";
import { WarningIcon } from "@pisagor/solid/icons";
import { createSignal, Show } from "solid-js";
import { mainContent } from "./helpers";

export function Banner() {
  const [opened, setOpened] = createSignal(true);

  return (
    <AppShell>
      <Show when={opened()}>
        <AppShell.Banner class="flex items-center justify-center gap-1 p-2">
          <Announcement
            badge={
              <Badge variant="destructive">
                <WarningIcon />
                Process interrupted
              </Badge>
            }
            role="alert"
            title="Something went wrong during the process. Try again or contact support if the problem continues."
          />
          <Button onClick={() => setOpened(false)} pill size="sm">
            Dismiss
          </Button>
        </AppShell.Banner>
      </Show>
      <AppShell.Main>{mainContent("Main")}</AppShell.Main>
    </AppShell>
  );
}
