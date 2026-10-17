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
