<script lang="ts">
import { FileUpload } from "../index";
</script>

<FileUpload>
  <FileUpload.Dropzone>
    <FileUpload.DropzoneIcon />
    <FileUpload.Title>Drop files here</FileUpload.Title>
    <FileUpload.Description>or click to browse</FileUpload.Description>
  </FileUpload.Dropzone>
  <FileUpload.List />
</FileUpload>
