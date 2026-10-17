<script lang="ts">
import source from "./pill.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { PhPlus } from "@phosphor-icons/vue";
import { Button } from "@pisagor/vue";
</script>

<template>
  <Button pill variant="outline">
    <PhPlus />
    Add
  </Button>
</template>
