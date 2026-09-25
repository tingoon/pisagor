<script lang="ts" setup>
import { PhCheckCircle, PhCircle, PhRocket } from "@phosphor-icons/vue";
import { Timeline } from "..";
</script>

<template>
  <Timeline.Root>
    <Timeline.Item>
      <Timeline.Separator />
      <Timeline.Indicator class="size-6 border-0 bg-success text-white">
        <PhCheckCircle weight="fill" />
      </Timeline.Indicator>
      <Timeline.Content>
        <Timeline.Title>Deployed to staging</Timeline.Title>
        <Timeline.Description>All checks passed.</Timeline.Description>
      </Timeline.Content>
    </Timeline.Item>
    <Timeline.Item>
      <Timeline.Separator />
      <Timeline.Indicator
        class="size-6 border-0 bg-primary text-primary-foreground"
      >
        <PhRocket weight="fill" />
      </Timeline.Indicator>
      <Timeline.Content>
        <Timeline.Title>Production rollout</Timeline.Title>
        <Timeline.Description>Canary at 10%.</Timeline.Description>
      </Timeline.Content>
    </Timeline.Item>
    <Timeline.Item>
      <Timeline.Separator />
      <Timeline.Indicator class="size-6 text-muted-foreground">
        <PhCircle />
      </Timeline.Indicator>
      <Timeline.Content>
        <Timeline.Title>Full release</Timeline.Title>
        <Timeline.Description>Pending sign-off.</Timeline.Description>
      </Timeline.Content>
    </Timeline.Item>
  </Timeline.Root>
</template>
