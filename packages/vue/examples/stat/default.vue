<script lang="ts">
import source from "./default.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { Stat } from "@pisagor/vue";

const description = "Updated 2 minutes ago";
const label = "Monthly recurring revenue";
const value = "$124,320";
</script>

<template>
  <Stat :description="description" :label="label" :value="value" />
</template>
