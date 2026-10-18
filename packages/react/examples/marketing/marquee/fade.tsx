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

const items = marqueeIcons.map((IconComponent) => (
  <Card
    className="[--space:--spacing(8)]"
    key={IconComponent.displayName ?? IconComponent.name}
  >
    <Card.Content>
      <IconComponent className="size-10" />
    </Card.Content>
  </Card>
));

export function Fade() {
  return (
    <div className="flex w-full flex-col gap-2 overflow-hidden">
      <Marquee items={items} pauseOnInteraction showEdges={false} />
      <Marquee items={items} pauseOnInteraction reverse />
    </div>
  );
}
