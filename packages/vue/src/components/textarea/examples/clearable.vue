<script setup lang="ts">
import { ref } from "vue";

import { Textarea } from "..";

const value = ref("");
</script>

<template>
  <Textarea v-model:value="value" clearable placeholder="Type to clear" />
</template>
