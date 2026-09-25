import { Button, Separator } from "@pisagor/react";
import { FileUpload } from "..";
export function MultipleFiles() {
  return (
    <FileUpload maxFiles={5}>
      <FileUpload.Dropzone>
        <FileUpload.DropzoneIcon />
        <FileUpload.Title>Drop files here</FileUpload.Title>
        <div className="flex items-center justify-center gap-2">
          <Separator />
          <FileUpload.Description>or</FileUpload.Description>
          <Separator />
        </div>
        <FileUpload.Trigger asChild>
          <Button>Browse files</Button>
        </FileUpload.Trigger>
        <FileUpload.Helper>
          You can upload up to 5 files at a time.
        </FileUpload.Helper>
      </FileUpload.Dropzone>
      <FileUpload.List />
    </FileUpload>
  );
}
