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

export function CustomSpeed() {
  return (
    <Marquee.Root>
      <MarqueeIconRow />
    </Marquee.Root>
  );
}
