<script setup lang="ts">
import { ref } from "vue";
import { Toggle } from "..";

const pressed = ref(false);
</script>

<template>
        <div class="flex flex-col items-center gap-2">
          <Toggle v-model:pressed="pressed" variant="outline">Toggle</Toggle>
          <p class="text-muted-foreground text-sm">{{ pressed ? '✅' : '❌' }}</p>
        </div>
  
</template>
