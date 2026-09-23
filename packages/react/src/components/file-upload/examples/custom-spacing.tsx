import { FileUpload } from "..";

export function CustomSpacing() {
  return (
    <FileUpload>
      <FileUpload.Dropzone className="[--space:--spacing(4)] md:[--space:--spacing(6)]">
        <FileUpload.DropzoneIcon />
        <FileUpload.Title>Drop your files here</FileUpload.Title>
      </FileUpload.Dropzone>
      <FileUpload.List />
    </FileUpload>
  );
}
