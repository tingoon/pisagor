/** @jsxImportSource solid-js */
import { Button } from "@pisagor/solid/button";
import { FileUpload } from "@pisagor/solid/file-upload";
import { Separator } from "@pisagor/solid/separator";

export function Default() {
  return (
    <FileUpload>
      <FileUpload.Dropzone>
        <FileUpload.DropzoneIcon />
        <FileUpload.Title>Drop files here</FileUpload.Title>
        <div class="flex items-center justify-center gap-2">
          <Separator />
          <FileUpload.Description>or</FileUpload.Description>
          <Separator />
        </div>
        <FileUpload.Trigger
          asChild={(props) => <Button {...props()}>Browse files</Button>}
        />
        <FileUpload.Helper>
          You can upload up to 2 files at a time.
        </FileUpload.Helper>
      </FileUpload.Dropzone>
      <FileUpload.List />
    </FileUpload>
  );
}
