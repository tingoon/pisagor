<script lang="ts" setup >
import { Surface } from "@pisagor/vue";
import { Textarea } from "..";
</script>

<template>
        <Surface bordered padding="md" variant="default">
          <div class="flex flex-col gap-2">
            <Textarea placeholder="Primary" variant="primary" />
            <Textarea placeholder="Secondary" variant="secondary" />
          </div>
        </Surface>
  
</template>
