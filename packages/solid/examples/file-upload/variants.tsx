/** @jsxImportSource solid-js */
import { Button, FileUpload } from "@pisagor/solid";
export function Variants() {
  return (
    <div class="flex flex-col gap-2">
      <FileUpload>
        <FileUpload.Dropzone variant="primary">
          <FileUpload.DropzoneIcon />
          <FileUpload.Title>Primary</FileUpload.Title>
          <FileUpload.Trigger
            asChild={(props) => <Button {...props()}>Browse files</Button>}
          />
        </FileUpload.Dropzone>
      </FileUpload>
      <FileUpload>
        <FileUpload.Dropzone variant="secondary">
          <FileUpload.DropzoneIcon />
          <FileUpload.Title>Secondary</FileUpload.Title>
          <FileUpload.Trigger
            asChild={(props) => <Button {...props()}>Browse files</Button>}
          />
        </FileUpload.Dropzone>
      </FileUpload>
    </div>
  );
}
