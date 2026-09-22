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

export function Default() {
  return (
    <Marquee
      items={marqueeIcons.map((IconComponent) => (
        <Card
          className="[--space:--spacing(8)]"
          key={IconComponent.displayName ?? IconComponent.name}
        >
          <Card.Content>
            <IconComponent className="size-10" />
          </Card.Content>
        </Card>
      ))}
    />
  );
}
