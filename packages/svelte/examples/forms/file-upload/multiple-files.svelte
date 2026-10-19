<script lang="ts">
  import { Button, FileUpload, Separator } from "@pisagor/svelte";
</script>

<FileUpload
  maxFiles={5}
  helper="You can upload up to 5 files at a time."
  title="Drop files here"
>
  {#snippet description()}
    <div class="flex items-center justify-center gap-2">
      <Separator />
      or
      <Separator />
    </div>
  {/snippet}
  {#snippet trigger(props)}
    <Button {...props()}>Browse files</Button>
  {/snippet}
</FileUpload>
