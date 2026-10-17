<script lang="ts">
import source from "./separator.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { Prose } from "@pisagor/vue";
</script>

<template>
  <Prose>
    <p>First section of content.</p>
    <hr />
    <p>Second section after the divider.</p>
  </Prose>
</template>
