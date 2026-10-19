import { Button, FileUpload } from "@pisagor/react";

export function Variants() {
  return (
    <div className="flex flex-col gap-2">
      <FileUpload variant="primary">
        <FileUpload.Dropzone>
          <FileUpload.DropzoneIcon />
          <FileUpload.Title>Primary</FileUpload.Title>
          <FileUpload.Trigger asChild>
            <Button>Browse files</Button>
          </FileUpload.Trigger>
        </FileUpload.Dropzone>
      </FileUpload>
      <FileUpload variant="secondary">
        <FileUpload.Dropzone>
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
