<script lang="ts" setup>
import { Provider } from "@pisagor/vue";
</script>

<template>
  <Provider>
    <div class="bg-muted text-foreground rounded-xl border px-4 py-3 text-sm">
      App content wrapped by Provider.
    </div>
  </Provider>
</template>
