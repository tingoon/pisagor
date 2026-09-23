<script lang="ts" setup >
import { Slider } from "..";
</script>

<template>
        <div class="flex flex-col gap-2">
          <Slider label="Primary" show-value variant="primary" :default-value="[40]" />
          <Slider label="Secondary" show-value variant="secondary" :default-value="[40]" />
        </div>
  
</template>
