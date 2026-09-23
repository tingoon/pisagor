<script lang="ts" setup >
import { PhArrowCounterClockwise, PhGear, PhPause, PhPlay } from "@phosphor-icons/vue";
import { Button, Card } from "@pisagor/vue";
import { Timer } from "..";
</script>

<template>
        <Card class="rounded-3xl [--space:--spacing(6)]">
          <Card.Content>
            <Timer class="items-center justify-center px-10" countdown :startMs="25 * 60 * 1000">
              <span>🍅</span>
              <Timer.Area>
                <Timer.Item class="text-5xl" type="minutes" />
                <Timer.Separator />
                <Timer.Item class="text-5xl" type="seconds" />
              </Timer.Area>
              <span class="mt-0.5 font-medium text-2.5 text-muted-foreground uppercase tracking-[0.22em]">
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
            </Timer>
          </Card.Content>
        </Card>
  
</template>
