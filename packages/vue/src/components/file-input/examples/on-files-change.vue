<script setup lang="ts">
import { FileInput } from "..";

const onFilesChange = () => undefined;
</script>

<template>
  <FileInput accept="image/*" multiple :on-files-change="onFilesChange" />
</template>
