import { LinkBox } from "..";

export function Article() {
  return (
    <LinkBox asChild>
      <article className="rounded-xl border p-4">
        <span className="text-muted-foreground text-sm">
          <time dateTime="2026-03-03T15:30:00Z">3 days ago</time>
        </span>
        <h2 className="my-2 font-medium text-lg">
          <LinkBox.Overlay href="https://example.com/articles/a11y-link-overlay">
            A11y Link Overlay
          </LinkBox.Overlay>
        </h2>
        <p className="mb-3 text-muted-foreground text-sm">
          Learn how to construct a screen reader friendly link overlay for accessibility and
          usability.
        </p>
        <a href="https://example.com/articles/a11y-link-overlay">Read the full article</a>
      </article>
    </LinkBox>
  );
}
