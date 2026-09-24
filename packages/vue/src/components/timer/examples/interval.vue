<script lang="ts" setup>
import { PhPause, PhPlay } from "@phosphor-icons/vue";
import { Button, Card } from "@pisagor/vue";
import { Timer } from "..";
</script>

<template>
  <Card class="rounded-3xl [--space:--spacing(6)]">
    <Card.Content>
      <Timer :interval="100" :target-ms="60 * 1000">
        <Timer.Area>
          <Timer.ItemGroup>
            <Timer.Item type="seconds" />
            <Timer.ItemLabel>seconds</Timer.ItemLabel>
          </Timer.ItemGroup>
          <Timer.Separator />
          <Timer.ItemGroup>
            <Timer.Item type="milliseconds" />
            <Timer.ItemLabel>ms</Timer.ItemLabel>
          </Timer.ItemGroup>
        </Timer.Area>
        <Timer.Control class="w-full justify-center">
          <Timer.Play as-child>
            <Button size="icon-sm" variant="ghost">
              <PhPlay />
            </Button>
          </Timer.Play>
          <Timer.Pause as-child>
            <Button size="icon-sm" variant="ghost">
              <PhPause />
            </Button>
          </Timer.Pause>
        </Timer.Control>
      </Timer>
    </Card.Content>
  </Card>
</template>
