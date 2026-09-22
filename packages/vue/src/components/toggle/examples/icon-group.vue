<script setup lang="ts">
import { PhTextB, PhTextItalic, PhTextUnderline } from "@phosphor-icons/vue";
import { Toggle } from "..";
</script>

<template>
        <div class="flex items-center gap-1">
          <Toggle aria-label="Toggle bold" variant="outline"><PhTextB /></Toggle>
          <Toggle aria-label="Toggle italic" variant="outline"><PhTextItalic /></Toggle>
          <Toggle aria-label="Toggle underline" variant="outline"><PhTextUnderline /></Toggle>
        </div>
  
</template>
