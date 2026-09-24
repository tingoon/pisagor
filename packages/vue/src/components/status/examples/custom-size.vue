<script lang="ts" setup>
import { Status } from "..";
</script>

<template>
  <div class="flex flex-wrap items-center gap-2">
    <Status class="size-4" variant="success" />
    <Status class="size-6" variant="info" />
    <Status class="size-8" variant="warning" />
  </div>
</template>
