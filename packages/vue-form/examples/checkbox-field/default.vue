<script lang="ts">
import source from "./default.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { CheckboxField } from "@pisagor/vue-form";
</script>

<template>
  <CheckboxField
    description="We'll send product news about once a month."
    id="checkbox-field-newsletter"
    label="Subscribe to the newsletter"
  />
</template>
