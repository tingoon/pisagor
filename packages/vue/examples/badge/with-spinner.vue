<script lang="ts">
import source from "./with-spinner.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { Badge, Spinner } from "@pisagor/vue";
</script>

<template>
  <div class="flex flex-wrap items-center gap-2">
    <Badge variant="destructive">
      <Spinner />
      Deleting
    </Badge>
    <Badge variant="outline">
      Generating
      <Spinner />
    </Badge>
  </div>
</template>
