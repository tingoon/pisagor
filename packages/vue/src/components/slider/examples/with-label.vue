<script setup lang="ts">
import { Field } from "@pisagor/vue";
import { Slider } from "..";
</script>

<template>
        <Field>
          <Slider :default-value="[50]" label="Opacity" show-value />
        </Field>
  
</template>
