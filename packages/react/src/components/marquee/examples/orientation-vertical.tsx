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
import { Card } from "@pisagor/react";
import { Marquee } from "..";

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
  );
}
