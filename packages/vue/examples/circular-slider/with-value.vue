<script lang="ts" setup>
import { PhThermometer } from "@phosphor-icons/vue";
import { CircularSlider } from "@pisagor/vue";
import { h } from "vue";

function prefix() {
  return h(PhThermometer, { class: "size-4" });
}
</script>

<template>
  <CircularSlider
    aria-label="Angle"
    :default-value="90"
    :size="120"
    :thickness="10"
  >
    <CircularSlider.ValueText suffix="°" :prefix="prefix()" />
  </CircularSlider>
</template>
