<script lang="ts">
import { FileUpload } from "@pisagor/svelte";
</script>

<FileUpload>
  <FileUpload.Dropzone class="[--space:--spacing(4)] md:[--space:--spacing(6)]">
    <FileUpload.DropzoneIcon />
    <FileUpload.Title>Drop your files here</FileUpload.Title>
  </FileUpload.Dropzone>
  <FileUpload.List />
</FileUpload>
