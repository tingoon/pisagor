<script setup lang="ts">
import { ref } from "vue";
import { SignaturePad } from "..";

const paths = ref([]);
function updatePaths(..._args: unknown[]) {
  /* demo */
}
</script>

<template>
  <SignaturePad @draw="updatePaths" @draw-end="updatePaths" :paths="paths" />
</template>
