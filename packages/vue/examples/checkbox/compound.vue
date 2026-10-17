<script lang="ts">
import source from "./compound.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { Checkbox } from "@pisagor/vue";
</script>

<template>
  <Checkbox.Root default-checked>
    <Checkbox.Control />
    <Checkbox.Label>Accept terms and conditions</Checkbox.Label>
    <Checkbox.HiddenInput />
  </Checkbox.Root>
</template>
