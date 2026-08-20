import { PhArrowUpRight, PhCheckCircle, PhSparkle, PhWarning } from "@phosphor-icons/vue";
import { Announcement, Badge } from "@pisagor/vue";
import { h } from "vue";
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
  subcomponents: {
    Root: Announcement.Root,
    Title: Announcement.Title,
  },
  title: "Components/Feedback/Announcement",
});

export const Default = meta.story({
  render: () => () =>
    h(Announcement, {
      badge: h(Badge, null, () => "Release"),
      title: "v2.1.0 — Dark mode, faster builds, and 12 new components",
    }),
});

export const Variants = meta.story({
  render: () => () =>
    h("div", { class: "flex flex-col gap-2" }, [
      h(Announcement, {
        badge: h(Badge, { variant: "default" }, () => "Release"),
        title: "v2.1.0 — Dark mode, faster builds, and 12 new components",
      }),
      h(Announcement, {
        badge: h(Badge, { variant: "destructive" }, () => [h(PhWarning), " Payment failed"]),
        title: "Your last invoice couldn't be processed. Update your billing info.",
      }),
      h(Announcement, {
        badge: h(Badge, { variant: "info" }, () => "Maintenance"),
        title: "Scheduled downtime tonight 2 to 4 a.m. UTC. No action needed.",
      }),
      h(Announcement.Root, { asChild: true }, () =>
        h("a", { href: "https://example.com/announcement" }, [
          h(Badge, { variant: "success" }, () => [h(PhCheckCircle), " Deployed"]),
          h(Announcement.Title, null, () => [
            "Production build completed in 2m 34s ",
            h(PhArrowUpRight),
          ]),
        ]),
      ),
      h(Announcement, {
        badge: h(Badge, { variant: "warning" }, () => [h(PhWarning), " Trial ending"]),
        title: "Your free trial expires in 3 days. Upgrade to keep access.",
      }),
    ]),
});

export const WithIcon = meta.story({
  render: () => () =>
    h(Announcement, {
      badge: h(Badge, { variant: "info" }, () => [h(PhSparkle), "New features"]),
      title: "Dark mode and 12 new components available",
    }),
});

export const WithLink = meta.story({
  render: () => () =>
    h(Announcement.Root, { asChild: true }, () =>
      h("a", { href: "/" }, [
        h(Badge, null, () => "Latest update"),
        h(Announcement.Title, null, () => [
          "New feature added",
          h(PhArrowUpRight, { "aria-hidden": true }),
        ]),
      ]),
    ),
});

export const WithoutBadge = meta.story({
  render: () => () =>
    h(Announcement, {
      title: ["New features added, check the logs for more details.", h(PhArrowUpRight)],
    }),
});

export const Compound = meta.story({
  parameters: {
    docs: {
      description: {
        story: "Manual composition with `Announcement.Root` when shorthand props are not enough.",
      },
    },
  },
  render: () => () =>
    h(Announcement.Root, null, () => [
      h(Badge, null, () => "Release"),
      h(Announcement.Title, null, () => "v2.1.0 — Dark mode, faster builds, and 12 new components"),
    ]),
});
