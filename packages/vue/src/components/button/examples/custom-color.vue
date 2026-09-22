<script setup lang="ts">
import { Button } from "..";
</script>

<template>
  <div class="flex flex-wrap gap-2">
    <Button
      class="bg-indigo-600 text-white shadow-indigo-600/24 hover:bg-indigo-700 focus-visible:ring-indigo-600/50"
    >
      Indigo
    </Button>
    <Button
      class="bg-pink-600 text-white shadow-pink-600/24 hover:bg-pink-700 focus-visible:ring-pink-600/50"
    >
      Pink
    </Button>
    <Button
      class="bg-sky-600 text-white shadow-sky-600/24 hover:bg-sky-700 focus-visible:ring-sky-600/50"
    >
      Sky
    </Button>
    <Button
      class="bg-purple-600 text-white shadow-purple-600/24 hover:bg-purple-700 focus-visible:ring-purple-500/50"
    >
      Purple
    </Button>
  </div>
</template>
