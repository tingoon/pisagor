<script setup lang="ts">
import { RadioGroupField } from "..";
</script>

<template>
  <RadioGroupField description="You can change this anytime in billing settings." disabled id="radio-group-field-plan-disabled" label="Plan" :options='planOptions' />
</template>
