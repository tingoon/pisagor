<script lang="ts" setup>
import { ColorPicker } from "..";
</script>

<template>
  <ColorPicker inline>
    <ColorPicker.SwatchGroup>
      <ColorPicker.SwatchTrigger class="rounded-xs" value="#0485F7">
        <ColorPicker.Swatch value="#0485F7">
          <ColorPicker.SwatchIndicator />
        </ColorPicker.Swatch>
      </ColorPicker.SwatchTrigger>
    </ColorPicker.SwatchGroup>
    <ColorPicker.SwatchGroup>
      <ColorPicker.SwatchTrigger class="rounded-md" value="#EF4444">
        <ColorPicker.Swatch value="#EF4444">
          <ColorPicker.SwatchIndicator />
        </ColorPicker.Swatch>
      </ColorPicker.SwatchTrigger>
    </ColorPicker.SwatchGroup>
    <ColorPicker.SwatchGroup>
      <ColorPicker.SwatchTrigger class="rounded-lg" value="#F59E0B">
        <ColorPicker.Swatch value="#F59E0B">
          <ColorPicker.SwatchIndicator />
        </ColorPicker.Swatch>
      </ColorPicker.SwatchTrigger>
    </ColorPicker.SwatchGroup>
    <ColorPicker.SwatchGroup>
      <ColorPicker.SwatchTrigger class="rounded-xl" value="#10B981">
        <ColorPicker.Swatch value="#10B981">
          <ColorPicker.SwatchIndicator />
        </ColorPicker.Swatch>
      </ColorPicker.SwatchTrigger>
    </ColorPicker.SwatchGroup>
  </ColorPicker>
</template>
