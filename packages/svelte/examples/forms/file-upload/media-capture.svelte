<script lang="ts">
  import { Button, FileUpload } from "@pisagor/svelte";
  import { CameraIcon } from "phosphor-svelte";
</script>

<FileUpload capture="environment" class="items-center" dropzone={false}>
  {#snippet trigger(props)}
    <Button {...props()} variant="outline">
      <CameraIcon />
      Take a picture
    </Button>
  {/snippet}
</FileUpload>
