<script lang="ts" setup >
import { ColorPicker } from "..";
</script>

<template>
        <ColorPicker class="w-full flex-wrap justify-center gap-2" inline>
          <ColorPicker.SwatchGroup>
            <ColorPicker.SwatchTrigger class="size-4" value="#0485F7">
              <ColorPicker.Swatch value="#0485F7" />
            </ColorPicker.SwatchTrigger>
            <ColorPicker.SwatchTrigger class="size-6" value="#EF4444">
              <ColorPicker.Swatch value="#EF4444">
                <ColorPicker.SwatchIndicator />
              </ColorPicker.Swatch>
            </ColorPicker.SwatchTrigger>
            <ColorPicker.SwatchTrigger class="size-8" value="#F59E0B">
              <ColorPicker.Swatch value="#F59E0B">
                <ColorPicker.SwatchIndicator />
              </ColorPicker.Swatch>
            </ColorPicker.SwatchTrigger>
            <ColorPicker.SwatchTrigger class="size-10" value="#10B981">
              <ColorPicker.Swatch value="#10B981">
                <ColorPicker.SwatchIndicator />
              </ColorPicker.Swatch>
            </ColorPicker.SwatchTrigger>
          </ColorPicker.SwatchGroup>
        </ColorPicker>
  
</template>
