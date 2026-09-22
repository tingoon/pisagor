<script setup lang="ts">
import { Slider } from "..";
</script>

<template>
        <div class="flex flex-col gap-2">
          <Slider :default-value="[40]" label="Primary" show-value variant="primary" />
          <Slider :default-value="[40]" label="Secondary" show-value variant="secondary" />
        </div>
  
</template>
