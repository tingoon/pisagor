/** @jsxImportSource solid-js */
import { FileUpload } from "@pisagor/solid/file-upload";

export function Dropzone() {
  return (
    <FileUpload>
      <FileUpload.Dropzone>
        <FileUpload.DropzoneIcon />
        <FileUpload.Title>Drop your files here</FileUpload.Title>
      </FileUpload.Dropzone>
      <FileUpload.List />
    </FileUpload>
  );
}
