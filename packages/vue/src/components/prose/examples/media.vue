<script lang="ts" setup>
import { Prose } from "..";
</script>

<template>
  <Prose>
    <figure>
      <img
        alt="Placeholder"
        height="200"
        width="200"
        :src="'/images/placeholder.svg'"
      >
      <figcaption>A description of the image.</figcaption>
    </figure>
  </Prose>
</template>
