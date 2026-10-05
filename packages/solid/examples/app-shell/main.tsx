import { AppShell } from "@pisagor/solid";
import { For } from "solid-js";
import { loremParagraphs, regionTitle } from "./helpers";

export function Main() {
  return (
    <AppShell>
      <AppShell.Navigation>{regionTitle("Navigation")}</AppShell.Navigation>
      <AppShell.Main>
        <AppShell.Header>{regionTitle("Header")}</AppShell.Header>
        <AppShell.Content>
          {regionTitle("Main")}
          <For each={loremParagraphs(8)}>
            {(paragraph) => <p style={{ "font-size": "15px" }}>{paragraph}</p>}
          </For>
        </AppShell.Content>
      </AppShell.Main>
    </AppShell>
  );
}
