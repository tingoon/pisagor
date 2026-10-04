import { Announcement, Badge } from "@pisagor/astro";
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
    slots: {
      badge: { component: Badge, slots: { default: "Release" } },
    },
    title: "v2.1.0 — Dark mode, faster builds, and 12 new components",
  },
  tags: ["autodocs"],
});
