<script lang="ts">
  import { Button, FileUpload } from "@pisagor/svelte";
  import { FolderIcon } from "phosphor-svelte";
</script>

<FileUpload directory class="items-center" dropzone={false}>
  {#snippet trigger(props)}
    <Button {...props()} size="sm" variant="outline">
      <FolderIcon />
      Select folder
    </Button>
  {/snippet}
</FileUpload>
