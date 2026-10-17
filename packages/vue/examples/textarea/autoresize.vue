<script lang="ts">
import source from "./autoresize.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { Textarea } from "@pisagor/vue";
</script>

<template>
  <Textarea autoresize placeholder="Type your message here" />
</template>
