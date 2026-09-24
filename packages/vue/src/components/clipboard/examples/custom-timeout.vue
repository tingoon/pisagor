<script lang="ts" setup>
import { Clipboard } from "..";
</script>

<template>
  <Clipboard value="https://example.com/docs" :timeout="5000" />
</template>
