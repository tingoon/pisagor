<script lang="ts" setup>
import { Clipboard } from "../../../../../src/components/clipboard";
</script>

<template>
  <Clipboard value="https://example.com/docs" :timeout="5000" />
</template>
