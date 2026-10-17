<script lang="ts">
import source from "./as-child.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { Button } from "@pisagor/vue";
</script>

<template>
  <Button as-child>
    <a href="/login">Login</a>
  </Button>
</template>
