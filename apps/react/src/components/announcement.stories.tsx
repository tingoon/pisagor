import { Announcement, Badge } from "@pisagor/react";
import * as Examples from "@pisagor/react/announcement/examples";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Announcement,
  parameters: {
    docs: {
      description: {
        component:
          "Draws attention to a short product or marketing message without blocking the rest of the interface.",
      },
    },
  },
  title: "Components/Feedback/Announcement",
});

export const Playground = meta.story({
  args: {
    badge: <Badge>Release</Badge>,
    title: "v2.1.0 — Dark mode, faster builds, and 12 new components",
  },
  tags: ["autodocs"],
});

export const Variants = meta.story({
  render: Examples.Variants,
});

export const WithIcon = meta.story({
  render: Examples.WithIcon,
});

export const WithLink = meta.story({
  render: Examples.WithLink,
});

export const WithoutBadge = meta.story({
  render: Examples.WithoutBadge,
});

export const Compound = meta.story({
  render: Examples.Compound,
});

export const Default = meta.story({
  render: Examples.Default,
});
