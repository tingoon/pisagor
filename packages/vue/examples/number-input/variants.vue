<script lang="ts" setup>
import { NumberInput } from "../../src/components/number-input";
</script>

<template>
  <div class="flex flex-col gap-2">
    <NumberInput default-value="1" variant="primary" />
    <NumberInput default-value="1" variant="secondary" />
  </div>
</template>
