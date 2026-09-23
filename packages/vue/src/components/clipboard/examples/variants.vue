<script lang="ts" setup >
import { Clipboard } from "..";
</script>

<template>
        <div class="flex flex-wrap items-center gap-2">
          <Clipboard value="https://example.com/docs" variant="input" />
          <Clipboard value="https://example.com/docs" variant="button" />
          <Clipboard value="https://example.com/docs" variant="value" />
        </div>
  
</template>
