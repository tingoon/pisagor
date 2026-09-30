<script lang="ts" setup>
import { ref } from "vue";
import { SignaturePad } from "../../../../../src/components/signature-pad";

const paths = ref([]);
function updatePaths(..._args: unknown[]) {
  /* demo */
}
</script>

<template>
  <SignaturePad :paths="paths" @draw="updatePaths" @draw-end="updatePaths" />
</template>
