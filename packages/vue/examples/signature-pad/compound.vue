<script lang="ts">
import source from "./compound.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { SignaturePad } from "@pisagor/vue";
</script>

<template>
  <SignaturePad.Root class="w-80">
    <SignaturePad.Control>
      <SignaturePad.Segment />
      <SignaturePad.Clear />
      <SignaturePad.Guide />
    </SignaturePad.Control>
  </SignaturePad.Root>
</template>
