<script lang="ts" setup>
import { Field, Slider } from "@pisagor/vue";
import { computed, ref } from "vue";

const value = ref([40]);
function onValueChange(next: typeof value.value) {
  value.value = next;
}
const isGreaterThan80 = computed(() => (value.value[0] ?? 0) > 80);
</script>

<template>
  <div class="flex flex-col gap-2">
    <p class="text-center text-sm">Greater than 80</p>
    <Field>
      <Slider
        label="Temperature"
        show-value
        :on-value-change="onValueChange"
        :value="value"
      />
    </Field>
    <p class="text-center">{{ isGreaterThan80 ? "✅" : "❌" }}</p>
  </div>
</template>
