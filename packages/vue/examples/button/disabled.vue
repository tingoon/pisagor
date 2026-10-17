<script lang="ts">
import source from "./disabled.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { PhPaperPlaneTilt } from "@phosphor-icons/vue";
import { Button } from "@pisagor/vue";
</script>

<template>
  <Button disabled>
    Send
    <PhPaperPlaneTilt />
  </Button>
</template>
