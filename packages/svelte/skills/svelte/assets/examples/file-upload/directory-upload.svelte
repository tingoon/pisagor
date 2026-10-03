<script lang="ts">
import { Button } from "@pisagor/svelte";
import { FileUpload } from "@pisagor/svelte/file-upload";
import FolderIcon from "phosphor-svelte/lib/FolderIcon";
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
