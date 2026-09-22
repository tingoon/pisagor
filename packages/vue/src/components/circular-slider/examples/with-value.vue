<script setup lang="ts">
import { CircularSlider } from "..";
</script>

<template>
        <CircularSlider aria-label="Angle" :default-value="90" :size="120" :thickness="10">
          <CircularSlider.ValueText :prefix="prefix()" suffix="°" />
        </CircularSlider>
  
</template>
