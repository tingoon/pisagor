<script lang="ts" setup>
import { Avatar } from "@pisagor/vue";
</script>

<template>
  <div class="flex flex-wrap items-center gap-4">
    <Avatar fallback="JD" />
    <Avatar fallback="JD" shape="rounded" />
    <Avatar fallback="JD" shape="square" />
  </div>
</template>
