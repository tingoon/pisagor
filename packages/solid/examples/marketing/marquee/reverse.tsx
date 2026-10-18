import { Card, Marquee } from "@pisagor/solid";
import type { IconProps } from "@squidlab/phosphor-solid";
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

function MarqueeIconRow() {
  return (
    <Marquee.Content>
      {marqueeIcons.map((IconComponent) => (
        <Marquee.Item>
          <Card class="[--space:--spacing(8)]">
            <Card.Content>
              <IconComponent class="size-10" />
            </Card.Content>
          </Card>
        </Marquee.Item>
      ))}
    </Marquee.Content>
  );
}

export function Reverse() {
  return (
    <Marquee.Root>
      <MarqueeIconRow />
    </Marquee.Root>
  );
}
