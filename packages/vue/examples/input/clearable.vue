<script lang="ts" setup>
import { Input } from "@pisagor/vue";
import { ref } from "vue";

const value = ref("Hello world");
</script>

<template>
  <Input clearable placeholder="Type to clear" v-model:value="value" />
</template>
