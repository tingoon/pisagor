<script setup lang="ts">
import { Clipboard } from "..";
</script>

<template>
  <Clipboard :timeout="5000" value="https://example.com/docs" />
</template>
