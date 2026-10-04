<script lang="ts" setup>
import { PhoneField } from "../../src/fields/phone-field";
</script>

<template>
  <PhoneField
    default-country="US"
    disabled
    id="phone-field-disabled"
    label="Phone number"
    placeholder="Enter phone number"
  />
</template>
