import { FileUpload } from "..";

export function AcceptedFileTypes() {
  return (
    <FileUpload accept="image/png,image/jpeg">
      <FileUpload.Dropzone className="w-full">
        <FileUpload.DropzoneIcon />
        <FileUpload.Title>Drop your images here</FileUpload.Title>
        <FileUpload.Helper>Only PNG and JPEG formats are allowed.</FileUpload.Helper>
      </FileUpload.Dropzone>
      <FileUpload.List />
    </FileUpload>
  );
}
