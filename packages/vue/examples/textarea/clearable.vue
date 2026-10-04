<script lang="ts" setup>
import { ref } from "vue";

import { Textarea } from "../../src/components/textarea";

const value = ref("");
</script>

<template>
  <Textarea clearable placeholder="Type to clear" v-model:value="value" />
</template>
