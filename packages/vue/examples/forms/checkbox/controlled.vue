<script lang="ts" setup>
import { Checkbox } from "@pisagor/vue";
import { ref } from "vue";

const checked = ref(false);
</script>

<template>
  <div class="flex flex-col items-center gap-2">
    <Checkbox v-model:checked="checked" />
    <p class="text-muted-foreground text-sm">
      {{ checked ? "Checked" : "Unchecked" }}
    </p>
  </div>
</template>
