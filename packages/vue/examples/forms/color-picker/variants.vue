<script lang="ts" setup>
import { ColorPicker } from "@pisagor/vue";
</script>

<template>
  <div class="flex flex-col gap-2">
    <ColorPicker default-value="#eb5e41" format="hsla" variant="primary" />
    <ColorPicker default-value="#eb5e41" format="hsla" variant="secondary" />
  </div>
</template>
