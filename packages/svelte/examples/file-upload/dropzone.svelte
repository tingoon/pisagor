<script lang="ts">
import { FileUpload } from "@pisagor/svelte/file-upload";
</script>

<FileUpload>
      <FileUpload.Dropzone>
        <FileUpload.DropzoneIcon />
        <FileUpload.Title>Drop your files here</FileUpload.Title>
      </FileUpload.Dropzone>
      <FileUpload.List />
    </FileUpload>
