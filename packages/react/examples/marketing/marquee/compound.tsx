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
import { Card, Marquee } from "@pisagor/react";

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

export function Compound() {
  return (
    <Marquee.Root>
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
    </Marquee.Root>
  );
}
