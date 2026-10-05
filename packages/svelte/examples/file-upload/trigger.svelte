<script lang="ts">
import { Button, FileUpload } from "@pisagor/svelte";
import PaperclipIcon from "phosphor-svelte/lib/PaperclipIcon";
</script>

<FileUpload>
  <div class="flex justify-center">
    <FileUpload.Trigger>
      {#snippet asChild(
        props: any,
      )}
        <Button {...props()} variant="outline">
          <PaperclipIcon />
          Browse files
        </Button>
      {/snippet}
    </FileUpload.Trigger>
  </div>
  <FileUpload.List />
</FileUpload>
