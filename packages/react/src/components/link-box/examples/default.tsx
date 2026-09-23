import { LinkBox } from "..";

export function Default() {
  return (
    <LinkBox asChild>
      <article className="rounded-xl border p-4">
        <h2 className="font-medium text-lg">
          <LinkBox.Overlay href="https://example.com">Clickable card title</LinkBox.Overlay>
        </h2>
        <p className="text-muted-foreground text-sm">
          The overlay expands the title link to cover the card for a larger click target.
        </p>
      </article>
    </LinkBox>
  );
}
