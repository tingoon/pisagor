<script setup lang="ts">
import { Surface } from "@pisagor/vue";
import { CircularSlider } from "..";
</script>

<template>
        <Surface bordered padding="md" variant="default">
          <CircularSlider aria-label="Angle" :default-value="45">
            <CircularSlider.ValueText suffix="°" />
          </CircularSlider>
        </Surface>
  
</template>
