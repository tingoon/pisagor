<script lang="ts">
  import { Button, FileUpload } from "@pisagor/svelte";
</script>

<FileUpload invalid title="Drop files here" helper="This field is required.">
  {#snippet trigger(props)}
    <Button {...props()}>Browse files</Button>
  {/snippet}
</FileUpload>
