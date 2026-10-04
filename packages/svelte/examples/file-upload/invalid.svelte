<script lang="ts">
import { Button } from "@pisagor/svelte";
import { FileUpload } from "@pisagor/svelte/file-upload";
</script>

<FileUpload invalid>
  <FileUpload.Dropzone>
    <FileUpload.DropzoneIcon />
    <FileUpload.Title>Drop files here</FileUpload.Title>
    <FileUpload.Trigger>
      {#snippet asChild(props)}
        <Button {...props()}>Browse files</Button>
      {/snippet}
    </FileUpload.Trigger>
    <FileUpload.Helper>This field is required.</FileUpload.Helper>
  </FileUpload.Dropzone>
  <FileUpload.List />
</FileUpload>
