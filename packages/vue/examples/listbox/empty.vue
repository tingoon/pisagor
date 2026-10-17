<script lang="ts">
import source from "./empty.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { Listbox } from "@pisagor/vue";
</script>

<template>
  <Listbox empty-text="No frameworks found." :items="[]" />
</template>
