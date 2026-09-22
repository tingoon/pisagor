<script setup lang="ts">
import { Surface } from "@pisagor/vue";
import { Slider } from "..";
</script>

<template>
        <Surface bordered class="flex flex-col gap-2" padding="md" variant="default">
          <Slider :default-value="[40]" label="Primary" show-value variant="primary" />
          <Slider :default-value="[40]" label="Secondary" show-value variant="secondary" />
        </Surface>
  
</template>
