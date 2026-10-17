<script lang="ts">
import source from "./disabled.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { CheckboxField } from "@pisagor/vue-form";
</script>

<template>
  <CheckboxField
    disabled
    id="checkbox-field-terms-disabled"
    label="I accept the terms and conditions"
  />
</template>
