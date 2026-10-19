import {
  ArrowRightIcon,
  AtomIcon,
  DeviceMobileIcon,
  GlobeIcon,
  LightningIcon,
  RobotIcon,
  SparkleIcon,
  StackIcon,
} from "@squidlab/phosphor-solid/icons";
import { Card, Marquee } from "@pisagor/solid";
import type { IconProps } from "@squidlab/phosphor-solid";
import type { Component } from "solid-js";

const marqueeIcons: Component<IconProps>[] = [
  GlobeIcon,
  DeviceMobileIcon,
  ArrowRightIcon,
  RobotIcon,
  SparkleIcon,
  LightningIcon,
  StackIcon,
  AtomIcon,
];

const items = marqueeIcons.map((IconComponent) => (
  <Card class="[--space:--spacing(8)]">
    <Card.Content>
      <IconComponent class="size-10" />
    </Card.Content>
  </Card>
));

export function Fade() {
  return (
    <div class="flex w-full flex-col gap-2 overflow-hidden">
      <Marquee items={items} pauseOnInteraction showEdges={false} />
      <Marquee items={items} pauseOnInteraction reverse />
    </div>
  );
}
