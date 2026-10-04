/** @jsxImportSource solid-js */

import { Card } from "@pisagor/solid";
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
} from "@pisagor/solid/icons";
import { Marquee } from "@pisagor/solid/marquee";

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

export function OrientationHorizontal() {
  return (
    <Marquee.Root>
      <MarqueeIconRow />
    </Marquee.Root>
  );
}
