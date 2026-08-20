import { ArrowUpRightIcon, CheckCircleIcon, SparkleIcon, WarningIcon } from "@phosphor-icons/react";
import { Announcement, Badge } from "@pisagor/react";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Announcement,
  parameters: {
    docs: {
      aliases: ["banner", "callout"],
      api: "compound-shorthand",
      checklist: {
        accessibleColor: true,
        definedBehaviors: true,
        definedOptions: true,
        interactiveStates: true,
        keyboardInteractions: true,
        platformScales: true,
      },
      description: {
        component:
          "Draws attention to a short product or marketing message without blocking the rest of the interface.",
      },
      taxonomy: "standard",
    },
  },
  subcomponents: {
    Root: Announcement.Root,
    Title: Announcement.Title,
  },
  title: "Components/Feedback/Announcement",
});

export const Default = meta.story({
  args: {
    badge: <Badge>Release</Badge>,
    title: "v2.1.0 — Dark mode, faster builds, and 12 new components",
  },
});

export const Variants = meta.story({
  render: () => (
    <div className="flex flex-col gap-2">
      <Announcement
        badge={<Badge variant="default">Release</Badge>}
        title="v2.1.0 — Dark mode, faster builds, and 12 new components"
      />
      <Announcement
        badge={
          <Badge variant="destructive">
            <WarningIcon /> Payment failed
          </Badge>
        }
        title="Your last invoice couldn't be processed. Update your billing info."
      />
      <Announcement
        badge={<Badge variant="info">Maintenance</Badge>}
        title="Scheduled downtime tonight 2 to 4 a.m. UTC. No action needed."
      />
      <Announcement.Root asChild>
        <a href="https://example.com/announcement">
          <Badge variant="success">
            <CheckCircleIcon /> Deployed
          </Badge>
          <Announcement.Title>
            Production build completed in 2m 34s <ArrowUpRightIcon />
          </Announcement.Title>
        </a>
      </Announcement.Root>
      <Announcement
        badge={
          <Badge variant="warning">
            <WarningIcon /> Trial ending
          </Badge>
        }
        title="Your free trial expires in 3 days. Upgrade to keep access."
      />
    </div>
  ),
});

export const WithIcon = meta.story({
  args: {
    badge: (
      <Badge variant="info">
        <SparkleIcon />
        New features
      </Badge>
    ),
    title: "Dark mode and 12 new components available",
  },
});

export const WithLink = meta.story({
  render: () => (
    <Announcement.Root asChild>
      <a href="/">
        <Badge>Latest update</Badge>
        <Announcement.Title>
          New feature added
          <ArrowUpRightIcon aria-hidden />
        </Announcement.Title>
      </a>
    </Announcement.Root>
  ),
});

export const WithoutBadge = meta.story({
  args: {
    title: (
      <>
        New features added, check the logs for more details.
        <ArrowUpRightIcon />
      </>
    ),
  },
});

export const Compound = meta.story({
  parameters: {
    docs: {
      description: {
        story: "Manual composition with `Announcement.Root` when shorthand props are not enough.",
      },
    },
  },
  render: () => (
    <Announcement.Root>
      <Badge>Release</Badge>

      <Announcement.Title>
        v2.1.0 — Dark mode, faster builds, and 12 new components
      </Announcement.Title>
    </Announcement.Root>
  ),
});
