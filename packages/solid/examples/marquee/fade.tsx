/** @jsxImportSource solid-js */

import { Card, Marquee } from "@pisagor/solid";
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

export function Fade() {
  return (
    <div class="flex w-full flex-col gap-2 overflow-hidden">
      <Marquee.Root pauseOnInteraction showEdges={false}>
        <MarqueeIconRow />
      </Marquee.Root>
      <Marquee.Root pauseOnInteraction reverse>
        <MarqueeIconRow />
      </Marquee.Root>
    </div>
  );
}
