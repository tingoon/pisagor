import { Button, FileUpload } from "@pisagor/solid";
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
