<script setup lang="ts">
import { PhSparkle } from "@phosphor-icons/vue";
import { ColorPicker } from "..";

const swatches = ["#0485F7", "#EF4444", "#F59E0B", "#10B981"];
</script>

<template>
        <ColorPicker inline>
          <ColorPicker.SwatchGroup>
            <ColorPicker.SwatchTrigger v-for="color in swatches" :key="color" :value="color">
              <ColorPicker.Swatch :value="color">
                <ColorPicker.SwatchIndicator>
                  <PhSparkle />
                </ColorPicker.SwatchIndicator>
              </ColorPicker.Swatch>
            </ColorPicker.SwatchTrigger>
          </ColorPicker.SwatchGroup>
        </ColorPicker>
  
</template>
