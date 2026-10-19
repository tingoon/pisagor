import { Button, FileUpload } from "@pisagor/solid";

export function Variants() {
  return (
    <div class="flex flex-col gap-2">
      <FileUpload variant="primary">
        <FileUpload.Dropzone>
          <FileUpload.DropzoneIcon />
          <FileUpload.Title>Primary</FileUpload.Title>
          <FileUpload.Trigger
            asChild={(props) => <Button {...props()}>Browse files</Button>}
          />
        </FileUpload.Dropzone>
      </FileUpload>
      <FileUpload variant="secondary">
        <FileUpload.Dropzone>
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
