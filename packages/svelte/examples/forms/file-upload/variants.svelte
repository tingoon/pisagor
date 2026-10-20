<script lang="ts">
  import { Button, FileUpload } from "@pisagor/svelte";
</script>

<div class="flex flex-col gap-2">
  <FileUpload variant="primary" title="Primary" showList={false}>
    {#snippet trigger(props)}
      <Button {...props()}>Browse files</Button>
    {/snippet}
  </FileUpload>
  <FileUpload variant="secondary" title="Secondary" showList={false}>
    {#snippet trigger(props)}
      <Button {...props()}>Browse files</Button>
    {/snippet}
  </FileUpload>
</div>
