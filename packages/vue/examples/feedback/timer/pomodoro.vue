<script lang="ts" setup>
import {
  PhArrowCounterClockwise,
  PhGear,
  PhPause,
  PhPlay,
} from "@phosphor-icons/vue";
import { Button, Card, Timer } from "@pisagor/vue";
</script>

<template>
  <Card class="rounded-3xl [--space:--spacing(6)]">
    <Card.Content>
      <Timer.Root
        class="items-center justify-center px-10"
        countdown
        :start-ms="25 * 60 * 1000"
      >
        <span>🍅</span>
        <Timer.Area>
          <Timer.Item class="text-5xl" type="minutes" />
          <Timer.Separator />
          <Timer.Item class="text-5xl" type="seconds" />
        </Timer.Area>
        <span
          class="text-2.5 text-muted-foreground mt-0.5 font-medium tracking-[0.22em] uppercase"
        >
          Focus
        </span>
        <Timer.Control class="w-full justify-center">
          <Timer.Reset as-child :hidden="false">
            <Button aria-label="Reset" size="icon-md" variant="ghost">
              <PhArrowCounterClockwise />
            </Button>
          </Timer.Reset>
          <Timer.Pause as-child>
            <Button aria-label="Pause" class="w-full" variant="ghost">
              <PhPause />
            </Button>
          </Timer.Pause>
          <Timer.Play as-child>
            <Button aria-label="Play" class="w-full" variant="ghost">
              <PhPlay />
            </Button>
          </Timer.Play>
          <Button aria-label="Settings" size="icon-md" variant="ghost">
            <PhGear />
          </Button>
        </Timer.Control>
      </Timer.Root>
    </Card.Content>
  </Card>
</template>
