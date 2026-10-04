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

export function OrientationVertical() {
  return (
    <Marquee.Root>
      <Marquee.Content>
        {marqueeIcons.map((IconComponent) => (
          <Marquee.Item>
            <Card>
              <Card.Content class="flex justify-center">
                <IconComponent class="size-10" />
              </Card.Content>
            </Card>
          </Marquee.Item>
        ))}
      </Marquee.Content>
    </Marquee.Root>
  );
}
