import type { ReactNode } from "react";
import { AppShell } from "..";

const LOREM_PARAGRAPH =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

function loremParagraphs(count: number) {
  return Array.from({ length: count }, () => LOREM_PARAGRAPH);
}

export function regionTitle(text: string): ReactNode {
  return (
    <div className="flex min-h-12 w-full items-center justify-center">
      <h6 className="text-center leading-4">{text}</h6>
    </div>
  );
}

export function mainContent(title: string, paragraphs = 24): ReactNode {
  return (
    <AppShell.Content>
      <h6 style={{ marginBottom: 8 }}>{title}</h6>
      {loremParagraphs(paragraphs).map((paragraph) => (
        <p key={paragraph} style={{ fontSize: 15 }}>
          {paragraph}
        </p>
      ))}
    </AppShell.Content>
  );
}
