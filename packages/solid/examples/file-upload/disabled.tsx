/** @jsxImportSource solid-js */
import { Button } from "@pisagor/solid";
import { FileUpload } from "@pisagor/solid/file-upload";
export function Disabled() {
  return (
    <FileUpload disabled>
      <FileUpload.Dropzone>
        <FileUpload.DropzoneIcon />
        <FileUpload.Title>Drop files here</FileUpload.Title>
        <FileUpload.Trigger
          asChild={(props) => <Button {...props()}>Browse files</Button>}
        />
      </FileUpload.Dropzone>
      <FileUpload.List />
    </FileUpload>
  );
}
