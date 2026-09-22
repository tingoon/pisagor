<script setup lang="ts">
import { NumberField } from "..";
</script>

<template>
  <NumberField description="Choose between 1 and 10." disabled id="number-field-quantity-disabled" label="Quantity" :max='10' :min='1' placeholder="0" />
</template>
