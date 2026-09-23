import { CheckCircleIcon, CircleIcon, RocketIcon } from "@phosphor-icons/react";
import { Timeline } from "..";

export function Compound() {
  return (
    <Timeline.Root>
      <Timeline.Item>
        <Timeline.Separator />
        <Timeline.Indicator className="size-6 border-0 bg-success text-white">
          <CheckCircleIcon weight="fill" />
        </Timeline.Indicator>
        <Timeline.Content>
          <Timeline.Title>Deployed to staging</Timeline.Title>
          <Timeline.Description>All checks passed.</Timeline.Description>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Separator />
        <Timeline.Indicator className="size-6 border-0 bg-primary text-primary-foreground">
          <RocketIcon weight="fill" />
        </Timeline.Indicator>
        <Timeline.Content>
          <Timeline.Title>Production rollout</Timeline.Title>
          <Timeline.Description>Canary at 10%.</Timeline.Description>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Separator />
        <Timeline.Indicator className="size-6 text-muted-foreground">
          <CircleIcon />
        </Timeline.Indicator>
        <Timeline.Content>
          <Timeline.Title>Full release</Timeline.Title>
          <Timeline.Description>Pending sign-off.</Timeline.Description>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline.Root>
  );
}
