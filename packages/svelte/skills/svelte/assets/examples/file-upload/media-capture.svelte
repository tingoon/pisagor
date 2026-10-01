<script lang="ts">
import { Button } from "@pisagor/svelte";
import { FileUpload } from "@pisagor/svelte/file-upload";
import CameraIcon from "phosphor-svelte/lib/CameraIcon";
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
