<script lang="ts" setup>
import { RadioGroupField } from "@pisagor/vue-form";
import { planOptions } from "../options";
</script>

<template>
  <RadioGroupField
    default-value="starter"
    description="You can upgrade or downgrade at any time."
    id="radio-group-field-subscription"
    label="Subscription"
    :options="planOptions"
  />
</template>
