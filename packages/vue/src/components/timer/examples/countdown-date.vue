<script setup lang="ts">
import { Card } from "@pisagor/vue";
import { Timer } from "..";

const startMs = Math.max(0, targetDate.getTime() - Date.now());
</script>

<template>
        <Card class="rounded-3xl [--space:--spacing(6)]">
          <Card.Content class="flex flex-col items-center gap-3">
            <p class="text-center text-muted-foreground text-xs">Until {{ targetLabel }}</p>
            <Timer autoStart class="items-center gap-2" countdown :startMs="startMs">
              <Timer.Area>
                <Timer.ItemGroup>
                  <Timer.Item type="days" />
                  <Timer.ItemLabel>days</Timer.ItemLabel>
                </Timer.ItemGroup>
                <Timer.Separator />
                <Timer.ItemGroup>
                  <Timer.Item type="hours" />
                  <Timer.ItemLabel>hours</Timer.ItemLabel>
                </Timer.ItemGroup>
                <Timer.Separator />
                <Timer.ItemGroup>
                  <Timer.Item type="minutes" />
                  <Timer.ItemLabel>minutes</Timer.ItemLabel>
                </Timer.ItemGroup>
                <Timer.Separator />
                <Timer.ItemGroup>
                  <Timer.Item type="seconds" />
                  <Timer.ItemLabel>seconds</Timer.ItemLabel>
                </Timer.ItemGroup>
              </Timer.Area>
            </Timer>
          </Card.Content>
        </Card>
  
</template>
