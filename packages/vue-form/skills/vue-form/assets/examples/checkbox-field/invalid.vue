<script lang="ts" setup>
import { CheckboxField } from "../../../../../src/fields/checkbox-field";
</script>

<template>
  <CheckboxField
    error="You must accept the terms to continue."
    id="checkbox-field-terms-invalid"
    invalid
    label="I accept the terms and conditions"
  />
</template>
