<script lang="ts">
import { Button, FileUpload } from "@pisagor/svelte";
</script>

<FileUpload disabled>
  <FileUpload.Dropzone>
    <FileUpload.DropzoneIcon />
    <FileUpload.Title>Drop files here</FileUpload.Title>
    <FileUpload.Trigger>
      {#snippet asChild(
  props,
)}
        <Button {...props()}>Browse files</Button>
      {/snippet}
    </FileUpload.Trigger>
  </FileUpload.Dropzone>
  <FileUpload.List />
</FileUpload>
