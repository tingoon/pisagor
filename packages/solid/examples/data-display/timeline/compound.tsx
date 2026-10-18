import { Timeline } from "@pisagor/solid";
import { CheckCircleIcon, CircleIcon, RocketIcon } from "@pisagor/solid/icons";

export function Compound() {
  return (
    <Timeline.Root>
      <Timeline.Item>
        <Timeline.Separator />
        <Timeline.Indicator class="bg-success size-6 border-0 text-white">
          <CheckCircleIcon weight="fill" />
        </Timeline.Indicator>
        <Timeline.Content>
          <Timeline.Title>Deployed to staging</Timeline.Title>
          <Timeline.Description>All checks passed.</Timeline.Description>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Separator />
        <Timeline.Indicator class="bg-primary text-primary-foreground size-6 border-0">
          <RocketIcon weight="fill" />
        </Timeline.Indicator>
        <Timeline.Content>
          <Timeline.Title>Production rollout</Timeline.Title>
          <Timeline.Description>Canary at 10%.</Timeline.Description>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Separator />
        <Timeline.Indicator class="text-muted-foreground size-6">
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
