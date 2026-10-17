<script lang="ts">
import source from "./with-label.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { Field, Slider } from "@pisagor/vue";
</script>

<template>
  <Field>
    <Slider label="Opacity" show-value :default-value="[50]" />
  </Field>
</template>
