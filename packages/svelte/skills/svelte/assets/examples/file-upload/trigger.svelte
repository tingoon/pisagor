<script lang="ts">
import { Button } from "@pisagor/svelte";
import { FileUpload } from "@pisagor/svelte/file-upload";
import PaperclipIcon from "phosphor-svelte/lib/PaperclipIcon";
</script>

<FileUpload>
  <div class="flex justify-center">
    <FileUpload.Trigger>
      {#snippet asChild(props)}
        <Button {...props()} variant="outline">
          <PaperclipIcon />
          Browse files
        </Button>
      {/snippet}
    </FileUpload.Trigger>
  </div>
  <FileUpload.List />
</FileUpload>
