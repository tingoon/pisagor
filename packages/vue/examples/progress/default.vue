<script lang="ts" setup>
import { Progress } from "@pisagor/vue";
import { ref } from "vue";

const progress = ref(13);
</script>

<template>
  <Progress :value="progress" />
</template>
