import { Button } from "@pisagor/react";
import { FileUpload } from "..";
export function Variants() {
  return (
    <div className="flex flex-col gap-2">
      <FileUpload>
        <FileUpload.Dropzone variant="primary">
          <FileUpload.DropzoneIcon />
          <FileUpload.Title>Primary</FileUpload.Title>
          <FileUpload.Trigger asChild>
            <Button>Browse files</Button>
          </FileUpload.Trigger>
        </FileUpload.Dropzone>
      </FileUpload>
      <FileUpload>
        <FileUpload.Dropzone variant="secondary">
          <FileUpload.DropzoneIcon />
          <FileUpload.Title>Secondary</FileUpload.Title>
          <FileUpload.Trigger asChild>
            <Button>Browse files</Button>
          </FileUpload.Trigger>
        </FileUpload.Dropzone>
      </FileUpload>
    </div>
  );
}
