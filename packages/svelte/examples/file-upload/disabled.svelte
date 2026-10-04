<script lang="ts">
import { Button } from "@pisagor/svelte";
import { FileUpload } from "@pisagor/svelte/file-upload";
</script>

<FileUpload disabled>
  <FileUpload.Dropzone>
    <FileUpload.DropzoneIcon />
    <FileUpload.Title>Drop files here</FileUpload.Title>
    <FileUpload.Trigger>
      {#snippet asChild(props)}
        <Button {...props()}>Browse files</Button>
      {/snippet}
    </FileUpload.Trigger>
  </FileUpload.Dropzone>
  <FileUpload.List />
</FileUpload>
