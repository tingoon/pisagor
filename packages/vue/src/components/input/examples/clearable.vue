<script lang="ts" setup >
import { ref } from "vue";
import { Input } from "..";

const value = ref("Hello world");
</script>

<template>
  <Input clearable placeholder="Type to clear" v-model:value="value" />
</template>
