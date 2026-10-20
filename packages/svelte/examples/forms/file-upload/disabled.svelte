<script lang="ts">
  import { Button, FileUpload } from "@pisagor/svelte";
</script>

<FileUpload disabled title="Drop files here">
  {#snippet trigger(props)}
    <Button {...props()}>Browse files</Button>
  {/snippet}
</FileUpload>
