import { Button, FileUpload } from "@pisagor/solid";
export function Invalid() {
  return (
    <FileUpload invalid>
      <FileUpload.Dropzone>
        <FileUpload.DropzoneIcon />
        <FileUpload.Title>Drop files here</FileUpload.Title>
        <FileUpload.Trigger
          asChild={(props) => <Button {...props()}>Browse files</Button>}
        />
        <FileUpload.Helper>This field is required.</FileUpload.Helper>
      </FileUpload.Dropzone>
      <FileUpload.List />
    </FileUpload>
  );
}
