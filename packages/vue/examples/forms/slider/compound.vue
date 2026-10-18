<script lang="ts" setup>
import { Slider } from "@pisagor/vue";
</script>

<template>
  <Slider.Root class="w-64" :default-value="[40]">
    <Slider.Header>
      <Slider.Label>Volume</Slider.Label>
      <Slider.Value />
    </Slider.Header>
    <Slider.Control>
      <Slider.Track>
        <Slider.Range />
      </Slider.Track>
      <Slider.Thumb :index="0" />
    </Slider.Control>
  </Slider.Root>
</template>
