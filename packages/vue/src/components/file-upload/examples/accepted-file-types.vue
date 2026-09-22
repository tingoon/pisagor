<script setup lang="ts">
import { FileUpload } from "..";
</script>

<template>
        <FileUpload accept="image/png,image/jpeg">
          <FileUpload.Dropzone class="w-full">
            <FileUpload.DropzoneIcon />
            <FileUpload.Title>Drop your images here</FileUpload.Title>
            <FileUpload.Helper>Only PNG and JPEG formats are allowed.</FileUpload.Helper>
          </FileUpload.Dropzone>
          <FileUpload.List />
        </FileUpload>
  
</template>
