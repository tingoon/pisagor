<script lang="ts" setup>
import { Rating } from "..";
</script>

<template>
  <div class="flex flex-wrap items-center gap-8">
    <Rating class="text-info" :count="5" :default-value="4" />
    <Rating class="text-success" :count="5" :default-value="4" />
  </div>
</template>
