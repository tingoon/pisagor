<script lang="ts" setup>
import { ColorPicker, parseColor } from "@pisagor/vue";
import { computed, ref } from "vue";

const swatches = ["#0485F7", "#EF4444", "#F59E0B", "#10B981"];
const value = ref("#0485F7");
function onValueChange(next: typeof value.value) {
  value.value = next;
}
const hexValue = computed(() => parseColor(value.value).toString("hex"));
</script>

<template>
  <div class="flex flex-col items-center gap-2">
    <ColorPicker inline :value="value" @value-change="onValueChange">
      <ColorPicker.SwatchGroup>
        <ColorPicker.SwatchTrigger
          v-for="color in swatches"
          :key="color"
          :value="color"
        >
          <ColorPicker.Swatch :value="color">
            <ColorPicker.SwatchIndicator />
          </ColorPicker.Swatch>
        </ColorPicker.SwatchTrigger>
      </ColorPicker.SwatchGroup>
    </ColorPicker>
    <p class="text-center text-muted-foreground text-sm">{{ hexValue }}</p>
  </div>
</template>
