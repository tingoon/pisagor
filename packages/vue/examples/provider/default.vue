<script lang="ts" setup>
import { Provider } from "../../src/components/provider";
</script>

<template>
  <Provider>
    <div class="rounded-xl border bg-muted px-4 py-3 text-foreground text-sm">
      App content wrapped by Provider.
    </div>
  </Provider>
</template>
