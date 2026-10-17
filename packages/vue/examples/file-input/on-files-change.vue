<script lang="ts" setup>
import { FileInput } from "@pisagor/vue";

const onFilesChange = () => undefined;
</script>

<template>
  <FileInput accept="image/*" multiple :on-files-change="onFilesChange" />
</template>
