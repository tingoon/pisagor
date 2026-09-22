<script setup lang="ts">
import { Slider } from "@pisagor/vue";
import { Field } from "..";
</script>

<template>
        <Field class="items-stretch gap-3">
          <Slider :default-value="[50]" label="Volume" />
          <Field.Description>Adjust the volume of the media player</Field.Description>
        </Field>
  
</template>
