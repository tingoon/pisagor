<script lang="ts">
import { Button, FileUpload } from "@pisagor/svelte";
import XIcon from "phosphor-svelte/lib/XIcon";

let files = $state<File[]>([]);
</script>

<FileUpload accept="image/*" onValueChange={(next) => (files = next)}>
  <FileUpload.Dropzone>
    <FileUpload.DropzoneIcon />
    <FileUpload.Title>Drop files here</FileUpload.Title>
  </FileUpload.Dropzone>
  {#if files.length > 0}
    <FileUpload.ItemGroup class="grid grid-cols-4 gap-2">
      {#each files as file}
        <FileUpload.Item {file}>
          <FileUpload.ItemPreview
            class="size-auto w-full rounded-2xl"
            type="image/*"
          >
            <FileUpload.ItemPreviewImage />
          </FileUpload.ItemPreview>
          <FileUpload.ItemDeleteTrigger>
            {#snippet asChild(
  props,
)}
              <Button
                {...props()}
                aria-label="Remove file"
                class="absolute -top-2 -right-2"
                pill
                size="icon-xs"
              >
                <XIcon />
              </Button>
            {/snippet}
          </FileUpload.ItemDeleteTrigger>
        </FileUpload.Item>
      {/each}
    </FileUpload.ItemGroup>
  {/if}
</FileUpload>
