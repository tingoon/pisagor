<script lang="ts" setup >
import { Card } from "@pisagor/vue";
import { Timer } from "..";
</script>

<template>
        <Card class="rounded-3xl [--space:--spacing(6)]">
          <Card.Content>
            <Timer autoStart countdown :startMs="5 * 60 * 1000">
              <Timer.Area>
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
