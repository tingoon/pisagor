<script lang="ts">
import source from "./media.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { Prose } from "@pisagor/vue";
</script>

<template>
  <Prose>
    <figure>
      <img
        alt="Placeholder"
        height="250"
        src="https://picsum.photos/seed/pisagor-prose/400/250"
        width="400"
      />
      <figcaption>A description of the image.</figcaption>
    </figure>
  </Prose>
</template>
