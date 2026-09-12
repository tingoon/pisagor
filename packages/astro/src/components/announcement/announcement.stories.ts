import Badge from "../badge/badge.astro";
import Announcement from "./announcement.astro";

export default {
  component: Announcement,
  parameters: {
    docs: {
      description: {
        component:
          "Draws attention to a short product or marketing message without blocking the rest of the interface.",
      },
    },
    metadata: {
      api: "compound-shorthand",
      taxonomy: "standard",
    },
  },
  title: "Components/Feedback/Announcement",
};

export const Default = {
  args: {
    slots: {
      badge: { component: Badge, slots: { default: "Release" } },
    },
    title: "v2.1.0 — Dark mode, faster builds, and 12 new components",
  },
};
