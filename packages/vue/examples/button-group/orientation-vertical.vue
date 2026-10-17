<script lang="ts">
import source from "./orientation-vertical.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { PhMinus, PhPlus } from "@phosphor-icons/vue";
import { Button, ButtonGroup } from "@pisagor/vue";
</script>

<template>
  <ButtonGroup orientation="vertical">
    <Button size="icon-md" variant="outline">
      <PhPlus />
    </Button>
    <Button size="icon-md" variant="outline">
      <PhMinus />
    </Button>
  </ButtonGroup>
</template>
