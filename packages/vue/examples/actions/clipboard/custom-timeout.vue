<script lang="ts" setup>
import { Clipboard } from "@pisagor/vue";
</script>

<template>
  <Clipboard value="https://example.com/docs" :timeout="5000" />
</template>
