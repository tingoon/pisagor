import { AppShell } from "@pisagor/solid";
import type { JSX } from "solid-js";
import { For } from "solid-js";

const LOREM_PARAGRAPH =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

export function loremParagraphs(count: number): string[] {
  return Array.from({ length: count }, () => LOREM_PARAGRAPH);
}

export function regionTitle(text: string): JSX.Element {
  return (
    <div class="flex min-h-12 w-full items-center justify-center">
      <h6 class="text-center leading-4">{text}</h6>
    </div>
  );
}

export function mainContent(title: string, paragraphs = 24): JSX.Element {
  return (
    <AppShell.Content>
      <h6 style={{ "margin-bottom": "8px" }}>{title}</h6>
      <For each={loremParagraphs(paragraphs)}>
        {(paragraph) => <p style={{ "font-size": "15px" }}>{paragraph}</p>}
      </For>
    </AppShell.Content>
  );
}
