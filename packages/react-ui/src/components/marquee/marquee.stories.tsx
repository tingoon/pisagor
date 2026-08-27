import {
  ArrowRightIcon,
  AtomIcon,
  DeviceMobileIcon,
  GlobeIcon,
  type Icon,
  LightningIcon,
  RobotIcon,
  SparkleIcon,
  StackIcon,
} from "@phosphor-icons/react";
import { Card, Marquee } from "@pisagor/react";
import preview from "#/storybook/preview";

const marqueeIcons: Icon[] = [
  GlobeIcon,
  DeviceMobileIcon,
  ArrowRightIcon,
  RobotIcon,
  SparkleIcon,
  LightningIcon,
  StackIcon,
  AtomIcon,
];

const meta = preview.meta({
  component: Marquee,
  parameters: {
    docs: {
      description: {
        component:
          "Scrolls content horizontally in a continuous loop for logos, quotes, or promotional strips.",
      },
    },
    metadata: {
      api: "compound-shorthand",
      taxonomy: "standard",
    },
  },
  subcomponents: {
    Content: Marquee.Content,
    Edge: Marquee.Edge,
    Item: Marquee.Item,
    Root: Marquee.Root,
  },
  title: "Components/Marketing/Marquee",
});

function MarqueeIconRow() {
  return (
    <Marquee.Content>
      {marqueeIcons.map((IconComponent) => (
        <Marquee.Item key={IconComponent.displayName ?? IconComponent.name}>
          <Card className="[--space:--spacing(8)]">
            <Card.Content>
              <IconComponent className="size-10" />
            </Card.Content>
          </Card>
        </Marquee.Item>
      ))}
    </Marquee.Content>
  );
}

export const Default = meta.story({
  args: {
    items: marqueeIcons.map((IconComponent) => (
      <Card
        className="[--space:--spacing(8)]"
        key={IconComponent.displayName ?? IconComponent.name}
      >
        <Card.Content>
          <IconComponent className="size-10" />
        </Card.Content>
      </Card>
    )),
  },
});

export const OrientationHorizontal = meta.story({
  args: {
    orientation: "horizontal",
  },
  render: (args) => (
    <Marquee.Root {...args}>
      <MarqueeIconRow />
    </Marquee.Root>
  ),
});

export const OrientationVertical = meta.story({
  args: {
    className: "max-h-80",
    orientation: "vertical",
  },
  render: (args) => (
    <Marquee.Root {...args}>
      <Marquee.Content>
        {marqueeIcons.map((IconComponent) => (
          <Marquee.Item key={IconComponent.displayName ?? IconComponent.name}>
            <Card>
              <Card.Content className="flex justify-center">
                <IconComponent className="size-10" />
              </Card.Content>
            </Card>
          </Marquee.Item>
        ))}
      </Marquee.Content>
    </Marquee.Root>
  ),
});

export const PauseOnHover = meta.story({
  args: {
    pauseOnInteraction: true,
  },
  render: (args) => (
    <Marquee.Root {...args}>
      <MarqueeIconRow />
    </Marquee.Root>
  ),
});

export const Reverse = meta.story({
  args: {
    reverse: true,
  },
  render: (args) => (
    <Marquee.Root {...args}>
      <MarqueeIconRow />
    </Marquee.Root>
  ),
});

export const Spacing = meta.story({
  args: {
    pauseOnInteraction: true,
    spacing: "40px",
  },
  render: (args) => (
    <Marquee.Root {...args}>
      <MarqueeIconRow />
    </Marquee.Root>
  ),
});

export const Autofill = meta.story({
  args: {
    autoFill: true,
    speed: 100,
  },
  render: (args) => (
    <Marquee.Root {...args}>
      <MarqueeIconRow />
    </Marquee.Root>
  ),
});

export const CustomSpeed = meta.story({
  args: {
    speed: 10,
  },
  render: (args) => (
    <Marquee.Root {...args}>
      <MarqueeIconRow />
    </Marquee.Root>
  ),
});

export const Fade = meta.story({
  render: () => (
    <div className="flex w-full flex-col gap-2 overflow-hidden">
      <Marquee.Root pauseOnInteraction showEdges={false}>
        <MarqueeIconRow />
      </Marquee.Root>
      <Marquee.Root pauseOnInteraction reverse>
        <MarqueeIconRow />
      </Marquee.Root>
    </div>
  ),
});

export const Compound = meta.story({
  parameters: {
    docs: {
      description: {
        story: "Manual composition with `Marquee.Root` when shorthand props are not enough.",
      },
    },
  },
  render: () => (
    <Marquee.Root>
      <MarqueeIconRow />
    </Marquee.Root>
  ),
});
