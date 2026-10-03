<script lang="ts" setup>
import { Spinner } from "@pisagor/vue";
import { Badge } from "../../../../../src/components/badge";
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
