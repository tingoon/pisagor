import { LinkBox } from "@pisagor/react";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: LinkBox,
  parameters: {
    docs: {
      description: {
        component:
          "Makes an entire card or tile clickable while keeping nested buttons usable underneath.",
      },
    },
    metadata: {
      aliases: ["link-overlay"],
      api: "compound",
      taxonomy: "primitive",
    },
  },
  subcomponents: {
    Overlay: LinkBox.Overlay,
  },
  title: "Components/Utilities/Link Box",
});

export const Default = meta.story({
  render: () => (
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
  ),
});

export const Article = meta.story({
  render: () => (
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
  ),
});

export const WithLink = meta.story({
  render: () => (
    <LinkBox asChild>
      <article className="flex flex-col gap-2 rounded-xl border p-4">
        <LinkBox.Overlay asChild>
          <a href="https://example.com/blog/simple-post">Blog post title</a>
        </LinkBox.Overlay>
        <p className="text-muted-foreground text-sm">A sample blog post.</p>
        <a className="text-primary underline" href="https://example.com/blog/simple-post/details">
          Inner link
        </a>
      </article>
    </LinkBox>
  ),
});
