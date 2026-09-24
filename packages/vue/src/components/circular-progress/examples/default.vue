<script lang="ts" setup>
import { ref } from "vue";
import { CircularProgress } from "..";

const progress = ref(24);
</script>

<template>
  <CircularProgress :value="progress" />
</template>
