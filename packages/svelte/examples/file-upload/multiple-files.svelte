<script lang="ts">
import { Button, FileUpload, Separator } from "@pisagor/svelte";
</script>

<FileUpload maxFiles={5}>
  <FileUpload.Dropzone>
    <FileUpload.DropzoneIcon />
    <FileUpload.Title>Drop files here</FileUpload.Title>
    <div class="flex items-center justify-center gap-2">
      <Separator />
      <FileUpload.Description>or</FileUpload.Description>
      <Separator />
    </div>
    <FileUpload.Trigger>
      {#snippet asChild(
        props: any,
      )}
        <Button {...props()}>Browse files</Button>
      {/snippet}
    </FileUpload.Trigger>
    <FileUpload.Helper
      >You can upload up to 5 files at a time.</FileUpload.Helper
    >
  </FileUpload.Dropzone>
  <FileUpload.List />
</FileUpload>
