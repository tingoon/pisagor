<script lang="ts" setup>
import { ref } from "vue";
import { Input } from "../../../../../src/components/input";

const value = ref("Hello world");
</script>

<template>
  <Input clearable placeholder="Type to clear" v-model:value="value" />
</template>
