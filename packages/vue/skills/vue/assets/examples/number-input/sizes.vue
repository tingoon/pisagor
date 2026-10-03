<script lang="ts" setup>
import { NumberInput } from "../../../../../src/components/number-input";
</script>

<template>
  <div class="flex flex-col gap-2">
    <NumberInput default-value="10" size="sm" />
    <NumberInput default-value="10" size="md" />
    <NumberInput default-value="10" size="lg" />
  </div>
</template>
