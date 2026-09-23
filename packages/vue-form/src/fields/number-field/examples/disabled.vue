<script lang="ts" setup >
import { NumberField } from "..";
</script>

<template>
  <NumberField description="Choose between 1 and 10." disabled id="number-field-quantity-disabled" label="Quantity" placeholder="0" :max='10' :min='1' />
</template>
