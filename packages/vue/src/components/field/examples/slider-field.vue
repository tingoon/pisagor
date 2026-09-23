<script lang="ts" setup >
import { Slider } from "@pisagor/vue";
import { Field } from "..";
</script>

<template>
        <Field class="items-stretch gap-3">
          <Slider label="Volume" :default-value="[50]" />
          <Field.Description>Adjust the volume of the media player</Field.Description>
        </Field>
  
</template>
