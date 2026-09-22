<script setup lang="ts">
import { Highlight } from "..";
</script>

<template>
        <p class="text-base text-foreground leading-relaxed">
          <Highlight
            class="rounded-md bg-amber-200 px-1.5 font-bold text-amber-900 dark:bg-amber-900/50 dark:text-amber-100"
            text="With the Highlight component, you can spotlight words."
            query="spotlight"
          />
        </p>
  
</template>
