import source from "./rejected-files.tsx?raw";
import { FileUpload } from "@pisagor/react";

export function RejectedFiles() {
  return (
    <FileUpload accept="image/*" maxFileSize={1024 * 1024} maxFiles={3}>
      <FileUpload.Dropzone className="w-full">
        <FileUpload.DropzoneIcon />
        <FileUpload.Title>Drop up to 3 images</FileUpload.Title>
        <FileUpload.Helper>Images only, max 1 MB each.</FileUpload.Helper>
      </FileUpload.Dropzone>
      <FileUpload.List />
    </FileUpload>
  );
}

export { source as RejectedFilesSource };
