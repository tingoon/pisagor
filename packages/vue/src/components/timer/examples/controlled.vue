<script setup lang="ts">
import { PhArrowCounterClockwise, PhPlay } from "@phosphor-icons/vue";
import { Button, Card } from "@pisagor/vue";
import { Timer } from "..";
</script>

<template>
        <div class="flex flex-col gap-2">
          <output class="text-center text-muted-foreground text-sm tabular-nums">
            Ticks: {{ ticks }} {{ completed ? " — Completed" : "" }}
          </output>
          <Card class="rounded-3xl [--space:--spacing(6)]">
            <Card.Content>
              <Timer
                class="items-center gap-2"
                :targetMs="5 * 1000"
                @complete="completed = true"
                @tick="ticks++"
              >
                <Timer.Area>
                  <Timer.ItemGroup>
                    <Timer.Item type="minutes" />
                    <Timer.ItemLabel>Minutes</Timer.ItemLabel>
                  </Timer.ItemGroup>
                  <Timer.Separator />
                  <Timer.ItemGroup>
                    <Timer.Item type="seconds" />
                    <Timer.ItemLabel>Seconds</Timer.ItemLabel>
                  </Timer.ItemGroup>
                </Timer.Area>
                <Timer.Control>
                  <Timer.Start as-child>
                    <Button aria-label="Start" size="icon-sm" variant="ghost">
                      <PhPlay />
                    </Button>
                  </Timer.Start>
                  <Timer.Reset as-child>
                    <Button aria-label="Reset" size="icon-sm" variant="ghost">
                      <PhArrowCounterClockwise />
                    </Button>
                  </Timer.Reset>
                </Timer.Control>
              </Timer>
            </Card.Content>
          </Card>
        </div>
  
</template>
