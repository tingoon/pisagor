<script lang="ts">
  import { Button, FileUpload } from "@pisagor/svelte";
  import { UploadIcon, XIcon } from "phosphor-svelte";

  let files = $state<File[]>([]);
</script>

<FileUpload.Root accept="image/*" onValueChange={(next) => (files = next)}>
  <FileUpload.Dropzone>
    <UploadIcon class="text-muted-foreground size-5" />
    <span class="text-sm font-medium">Drop files here</span>
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
            {#snippet asChild(props)}
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
</FileUpload.Root>
