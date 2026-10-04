<script lang="ts" setup>
import { ref } from "vue";
import { CircularProgress } from "../../src/components/circular-progress";

const progress = ref(24);
</script>

<template>
  <CircularProgress :value="progress" />
</template>
