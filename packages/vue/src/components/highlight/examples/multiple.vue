<script lang="ts" setup>
import { Highlight } from "..";
</script>

<template>
  <p class="text-base text-foreground leading-relaxed">
    <Highlight
      text="With the Highlight component, you can spotlight, emphasize and accentuate words."
      :query="['spotlight', 'emphasize', 'accentuate']"
    />
  </p>
</template>
