<script lang="ts">
import { Timeline } from "@pisagor/svelte/timeline";
import CheckCircleIcon from "phosphor-svelte/lib/CheckCircleIcon";
import CircleIcon from "phosphor-svelte/lib/CircleIcon";
import RocketIcon from "phosphor-svelte/lib/RocketIcon";
</script>

<Timeline.Root>
      <Timeline.Item>
        <Timeline.Separator />
        <Timeline.Indicator class="size-6 border-0 bg-success text-white">
          <CheckCircleIcon weight="fill" />
        </Timeline.Indicator>
        <Timeline.Content>
          <Timeline.Title>Deployed to staging</Timeline.Title>
          <Timeline.Description>All checks passed.</Timeline.Description>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Separator />
        <Timeline.Indicator class="size-6 border-0 bg-primary text-primary-foreground">
          <RocketIcon weight="fill" />
        </Timeline.Indicator>
        <Timeline.Content>
          <Timeline.Title>Production rollout</Timeline.Title>
          <Timeline.Description>Canary at 10%.</Timeline.Description>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Separator />
        <Timeline.Indicator class="size-6 text-muted-foreground">
          <CircleIcon />
        </Timeline.Indicator>
        <Timeline.Content>
          <Timeline.Title>Full release</Timeline.Title>
          <Timeline.Description>Pending sign-off.</Timeline.Description>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline.Root>
