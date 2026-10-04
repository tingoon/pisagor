<script lang="ts">
import { Button, FileUpload } from "@pisagor/svelte";
</script>

<div class="flex flex-col gap-2">
  <FileUpload>
    <FileUpload.Dropzone variant="primary">
      <FileUpload.DropzoneIcon />
      <FileUpload.Title>Primary</FileUpload.Title>
      <FileUpload.Trigger>
        {#snippet asChild(props)}
          <Button {...props()}>Browse files</Button>
        {/snippet}
      </FileUpload.Trigger>
    </FileUpload.Dropzone>
  </FileUpload>
  <FileUpload>
    <FileUpload.Dropzone variant="secondary">
      <FileUpload.DropzoneIcon />
      <FileUpload.Title>Secondary</FileUpload.Title>
      <FileUpload.Trigger>
        {#snippet asChild(props)}
          <Button {...props()}>Browse files</Button>
        {/snippet}
      </FileUpload.Trigger>
    </FileUpload.Dropzone>
  </FileUpload>
</div>
