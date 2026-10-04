<script lang="ts" setup>
import { FileInput } from "../../src/components/file-input";

const onFilesChange = () => undefined;
</script>

<template>
  <FileInput accept="image/*" multiple :on-files-change="onFilesChange" />
</template>
