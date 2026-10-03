<script lang="ts" setup>
import { Status } from "../../../../../src/components/status";
</script>

<template>
  <div class="flex gap-2">
    <Status variant="default" />
    <Status variant="success" />
    <Status variant="info" />
    <Status variant="warning" />
    <Status variant="destructive" />
  </div>
</template>
