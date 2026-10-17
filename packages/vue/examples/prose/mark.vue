<script lang="ts">
import source from "./mark.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { Prose } from "@pisagor/vue";
</script>

<template>
  <Prose>
    <p>
      The king's <mark>brilliant plan</mark> was to tax jokes in the kingdom.
    </p>
  </Prose>
</template>
