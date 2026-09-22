<script setup lang="ts">
import { Rating } from "..";
</script>

<template>
        <div class="flex flex-wrap items-center gap-8">
          <Rating class="text-info" :count="5" :defaultValue="4" />
          <Rating class="text-success" :count="5" :defaultValue="4" />
        </div>
  
</template>
