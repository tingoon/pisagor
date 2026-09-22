<script setup lang="ts">
import { ref } from "vue";
import { Input } from "..";

const value = ref("Hello world");
</script>

<template>
  <Input v-model:value="value" clearable placeholder="Type to clear" />
</template>
