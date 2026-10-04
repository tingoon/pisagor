<script lang="ts" setup>
import { Textarea } from "@pisagor/vue";
import { ref } from "vue";

const value = ref("");
</script>

<template>
  <Textarea clearable placeholder="Type to clear" v-model:value="value" />
</template>
