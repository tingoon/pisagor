<script lang="ts">
import source from "./no-click-effect.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { Button } from "@pisagor/vue";
</script>

<template>
  <Button :click-effect="false">Button</Button>
</template>
