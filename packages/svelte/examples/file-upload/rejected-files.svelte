<script module lang="ts">
  import source from "./rejected-files.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { FileUpload } from "@pisagor/svelte";
</script>

<FileUpload accept="image/*" maxFileSize={1024 * 1024} maxFiles={3}>
  <FileUpload.Dropzone class="w-full">
    <FileUpload.DropzoneIcon />
    <FileUpload.Title>Drop up to 3 images</FileUpload.Title>
    <FileUpload.Helper>Images only, max 1 MB each.</FileUpload.Helper>
  </FileUpload.Dropzone>
  <FileUpload.List />
</FileUpload>
