import { FileUpload } from "..";

export function Dropzone() {
  return (
    <FileUpload>
      <FileUpload.Dropzone>
        <FileUpload.DropzoneIcon />
        <FileUpload.Title>Drop your files here</FileUpload.Title>
      </FileUpload.Dropzone>
      <FileUpload.List />
    </FileUpload>
  );
}
