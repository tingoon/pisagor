<script lang="ts" setup>
import { PhArrowCounterClockwise } from "@phosphor-icons/vue";
import { Button, SignaturePad } from "@pisagor/vue";
</script>

<template>
  <SignaturePad.Root class="w-80">
    <SignaturePad.Control>
      <SignaturePad.Segment />
      <SignaturePad.ClearTrigger as-child>
        <Button aria-label="Clear signature" size="icon-md" variant="ghost">
          <PhArrowCounterClockwise />
        </Button>
      </SignaturePad.ClearTrigger>
      <SignaturePad.Guide />
    </SignaturePad.Control>
  </SignaturePad.Root>
</template>
