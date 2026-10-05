<script lang="ts">
import { Button, FileUpload } from "@pisagor/svelte";
import CameraIcon from "phosphor-svelte/lib/CameraIcon";
</script>

<FileUpload capture="environment">
  <div class="flex justify-center">
    <FileUpload.Trigger>
      {#snippet asChild(
        props: any,
      )}
        <Button {...props()} variant="outline">
          <CameraIcon />
          Take a picture
        </Button>
      {/snippet}
    </FileUpload.Trigger>
  </div>
  <FileUpload.List />
</FileUpload>
