<script lang="ts">
  import { Button, FileUpload } from "@pisagor/svelte";
  import { PaperclipIcon } from "phosphor-svelte";
</script>

<FileUpload class="items-center" dropzone={false}>
  {#snippet trigger(props)}
    <Button {...props()} variant="outline">
      <PaperclipIcon />
      Browse files
    </Button>
  {/snippet}
</FileUpload>
