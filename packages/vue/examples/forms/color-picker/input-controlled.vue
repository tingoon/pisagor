<script lang="ts" setup>
import { ColorPicker, Input, parseColor } from "@pisagor/vue";
import { computed, ref } from "vue";

const value = ref("#eb5e41");
function onValueChange(next: typeof value.value) {
  value.value = next;
}
const hexValue = computed(() => parseColor(value.value).toString("hex"));
</script>

<template>
  <div class="flex flex-col gap-2">
    <ColorPicker.Root :value="value" @value-change="onValueChange">
      <ColorPicker.Control>
        <ColorPicker.Input as-child>
          <Input />
        </ColorPicker.Input>
      </ColorPicker.Control>
    </ColorPicker.Root>
    <p class="text-muted-foreground text-center text-sm">{{ hexValue }}</p>
  </div>
</template>
