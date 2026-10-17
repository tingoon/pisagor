<script lang="ts">
import source from "./invalid.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { TagsInput } from "@pisagor/vue";
</script>

<template>
  <TagsInput class="w-full" invalid :default-value="['React']" />
</template>
