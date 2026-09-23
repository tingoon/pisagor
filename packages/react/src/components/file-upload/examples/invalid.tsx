import { Button } from "@pisagor/react";
import { FileUpload } from "..";
export function Invalid() {
  return (
    <FileUpload invalid>
      <FileUpload.Dropzone>
        <FileUpload.DropzoneIcon />
        <FileUpload.Title>Drop files here</FileUpload.Title>
        <FileUpload.Trigger asChild>
          <Button>Browse files</Button>
        </FileUpload.Trigger>
        <FileUpload.Helper>This field is required.</FileUpload.Helper>
      </FileUpload.Dropzone>
      <FileUpload.List />
    </FileUpload>
  );
}
