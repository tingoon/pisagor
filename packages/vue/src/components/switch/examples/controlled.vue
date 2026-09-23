<script lang="ts" setup >
import { ref } from "vue";
import { Switch } from "..";

const checked = ref(false);
</script>

<template>
        <div class="flex flex-col items-center gap-2">
          <Switch v-model:checked="checked" />
          <p class="text-muted-foreground text-sm">{{ checked ? 'On' : 'Off' }}</p>
        </div>
  
</template>
