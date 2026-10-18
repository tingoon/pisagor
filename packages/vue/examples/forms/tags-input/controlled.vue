<script lang="ts" setup>
import { Field, TagsInput } from "@pisagor/vue";
import { ref } from "vue";

const value = ref(["React", "Solid"]);
function onValueChange(next: typeof value.value) {
  value.value = next;
}
</script>

<template>
  <Field>
    <Field.Label>Frameworks</Field.Label>
    <TagsInput class="w-full" :value="value" @value-change="onValueChange" />
  </Field>
</template>
