<script setup lang="ts">
import { CircularSlider } from "..";

const sizes = [120, 160, 200] as const;
</script>

<template>
        <div class="flex flex-wrap items-center gap-2">
          <CircularSlider
            v-for="size in sizes"
            :key="size"
            aria-label="Angle"
            :default-value="45"
            :size="size"
          >
            <CircularSlider.ValueText suffix="°" />
          </CircularSlider>
        </div>
  
</template>
