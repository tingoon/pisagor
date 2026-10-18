<script lang="ts">
  import { Button, FileUpload } from "@pisagor/svelte";
  import { CameraIcon } from "phosphor-svelte";
</script>

<FileUpload capture="environment">
  <div class="flex justify-center">
    <FileUpload.Trigger>
      {#snippet asChild(props)}
        <Button {...props()} variant="outline">
          <CameraIcon />
          Take a picture
        </Button>
      {/snippet}
    </FileUpload.Trigger>
  </div>
  <FileUpload.List />
</FileUpload>
