import { faker } from "@faker-js/faker";
import { AppShell } from "..";
import { regionTitle } from "./helpers";

export function Main() {
  return (
    <AppShell>
      <AppShell.Navigation>{regionTitle("Navigation")}</AppShell.Navigation>
      <AppShell.Main>
        <AppShell.Header>{regionTitle("Header")}</AppShell.Header>
        <AppShell.Content>
          {regionTitle("Main")}
          {faker.lorem
            .paragraphs(8)
            .split("\n")
            .map((paragraph) => (
              <p key={paragraph} style={{ fontSize: 15 }}>
                {paragraph}
              </p>
            ))}
        </AppShell.Content>
      </AppShell.Main>
    </AppShell>
  );
}
