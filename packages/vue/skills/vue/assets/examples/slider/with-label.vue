<script lang="ts" setup>
import { Field } from "@pisagor/vue";
import { Slider } from "../../../../../src/components/slider";
</script>

<template>
  <Field>
    <Slider label="Opacity" show-value :default-value="[50]" />
  </Field>
</template>
