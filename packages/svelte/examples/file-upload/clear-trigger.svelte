<script lang="ts">
import { Button } from "@pisagor/svelte";
import { FileUpload } from "@pisagor/svelte/file-upload";
import TrashIcon from "phosphor-svelte/lib/TrashIcon";
</script>

<FileUpload>
  <FileUpload.ClearTrigger class="absolute top-2 right-2">
    {#snippet asChild(props)}
      <Button {...props()} aria-label="Clear files" size="icon-sm" variant="ghost">
        <TrashIcon />
      </Button>
    {/snippet}
  </FileUpload.ClearTrigger>
  <FileUpload.Dropzone class="w-full">
    <FileUpload.DropzoneIcon />
    <FileUpload.Title>Drop files here</FileUpload.Title>
  </FileUpload.Dropzone>
  <FileUpload.List />
</FileUpload>
