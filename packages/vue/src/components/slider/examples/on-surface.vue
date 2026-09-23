<script lang="ts" setup >
import { Surface } from "@pisagor/vue";
import { Slider } from "..";
</script>

<template>
        <Surface bordered class="flex flex-col gap-2" padding="md" variant="default">
          <Slider label="Primary" show-value variant="primary" :default-value="[40]" />
          <Slider label="Secondary" show-value variant="secondary" :default-value="[40]" />
        </Surface>
  
</template>
