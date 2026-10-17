<script module lang="ts">
  import source from "./invalid.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Button, FileUpload } from "@pisagor/svelte";
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
