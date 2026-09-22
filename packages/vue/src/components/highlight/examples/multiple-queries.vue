<script setup lang="ts">
import { Highlight } from "..";
</script>

<template>
        <div class="w-96 rounded-xl border bg-card p-4 text-sm">
          <Highlight
            text="Design once, reuse everywhere, and keep behavior consistent."
            :query="['Design', 'reuse']"
            :match-all="false"
          />
        </div>
  
</template>
