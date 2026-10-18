<script lang="ts">
  import { Button, FileUpload } from "@pisagor/svelte";
  import { FolderIcon } from "phosphor-svelte";
</script>

<FileUpload directory>
  <div class="flex justify-center">
    <FileUpload.Trigger>
      {#snippet asChild(props)}
        <Button {...props()} size="sm" variant="outline">
          <FolderIcon />
          Select folder
        </Button>
      {/snippet}
    </FileUpload.Trigger>
    <FileUpload.List />
  </div>
</FileUpload>
