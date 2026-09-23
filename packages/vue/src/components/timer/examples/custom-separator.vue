<script lang="ts" setup >
import { Card } from "@pisagor/vue";
import { Timer } from "..";
</script>

<template>
        <Card class="rounded-3xl [--space:--spacing(6)]">
          <Card.Content>
            <Timer autoStart class="items-center gap-2" countdown :startMs="5 * 60 * 1000">
              <Timer.Area>
                <Timer.Item type="minutes" />
                <Timer.Separator>//</Timer.Separator>
                <Timer.Item type="seconds" />
              </Timer.Area>
            </Timer>
          </Card.Content>
        </Card>
  
</template>
