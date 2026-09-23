import { Button } from "@pisagor/react";
import { FileUpload } from "..";
export function Disabled() {
  return (
    <FileUpload disabled>
      <FileUpload.Dropzone>
        <FileUpload.DropzoneIcon />
        <FileUpload.Title>Drop files here</FileUpload.Title>
        <FileUpload.Trigger asChild>
          <Button>Browse files</Button>
        </FileUpload.Trigger>
      </FileUpload.Dropzone>
      <FileUpload.List />
    </FileUpload>
  );
}
