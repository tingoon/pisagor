<script lang="ts" setup>
import { ref } from "vue";
import { Progress } from "../../../../../src/components/progress";

const progress = ref(13);
</script>

<template>
  <Progress :value="progress" />
</template>
