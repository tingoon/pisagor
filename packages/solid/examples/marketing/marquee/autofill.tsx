import { Card, Marquee } from "@pisagor/solid";
import {
  ArrowRightIcon,
  AtomIcon,
  DeviceMobileIcon,
  GlobeIcon,
  type IconProps,
  LightningIcon,
  RobotIcon,
  SparkleIcon,
  StackIcon,
} from "@pisagor/solid/icons";
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

export function Autofill() {
  return (
    <Marquee.Root>
      <MarqueeIconRow />
    </Marquee.Root>
  );
}
