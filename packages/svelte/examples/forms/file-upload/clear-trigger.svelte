<script lang="ts">
  import { Button, FileUpload } from "@pisagor/svelte";
  import { TrashIcon } from "phosphor-svelte";
</script>

<FileUpload
  title="Drop files here"
  classNames={{ clearTrigger: "absolute top-2 right-2", dropzone: "w-full" }}
>
  {#snippet clearTrigger(props)}
    <Button
      {...props()}
      aria-label="Clear files"
      size="icon-sm"
      variant="ghost"
    >
      <TrashIcon />
    </Button>
  {/snippet}
</FileUpload>
