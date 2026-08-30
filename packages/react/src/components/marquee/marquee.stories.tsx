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

const marqueeItems = marqueeIcons.map((IconComponent) => (
  <Card className="[--space:--spacing(8)]" key={IconComponent.displayName ?? IconComponent.name}>
    <Card.Content>
      <IconComponent className="size-10" />
    </Card.Content>
  </Card>
));

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
    items: marqueeItems,
  },
});

export const OrientationHorizontal = meta.story({
  args: {
    items: marqueeItems,
    orientation: "horizontal",
  },
});

export const OrientationVertical = meta.story({
  args: {
    className: "max-h-80",
    items: marqueeIcons.map((IconComponent) => (
      <Card key={IconComponent.displayName ?? IconComponent.name}>
        <Card.Content className="flex justify-center">
          <IconComponent className="size-10" />
        </Card.Content>
      </Card>
    )),
    orientation: "vertical",
  },
});

export const PauseOnHover = meta.story({
  args: {
    items: marqueeItems,
    pauseOnInteraction: true,
  },
});

export const Reverse = meta.story({
  args: {
    items: marqueeItems,
    reverse: true,
  },
});

export const Spacing = meta.story({
  args: {
    items: marqueeItems,
    pauseOnInteraction: true,
    spacing: "40px",
  },
});

export const Autofill = meta.story({
  args: {
    autoFill: true,
    items: marqueeItems,
    speed: 100,
  },
});

export const CustomSpeed = meta.story({
  args: {
    items: marqueeItems,
    speed: 10,
  },
});

export const Fade = meta.story({
  render: () => (
    <div className="flex w-full flex-col gap-2 overflow-hidden">
      <Marquee items={marqueeItems} pauseOnInteraction showEdges={false} />
      <Marquee items={marqueeItems} pauseOnInteraction reverse />
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
