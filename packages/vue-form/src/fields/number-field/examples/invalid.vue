<script lang="ts" setup >
import { NumberField } from "..";
</script>

<template>
  <NumberField error="Quantity must be at least 1." id="number-field-quantity-invalid" invalid label="Quantity" :max='10' :min='1' :value='0' />
</template>
