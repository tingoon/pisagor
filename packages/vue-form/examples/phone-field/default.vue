<script lang="ts" setup>
import { PhoneField } from "@pisagor/vue-form";
</script>

<template>
  <PhoneField
    default-country="GB"
    description="We'll only call about your delivery."
    id="phone-field-contact"
    label="Contact number"
    placeholder="Enter phone number"
  />
</template>
