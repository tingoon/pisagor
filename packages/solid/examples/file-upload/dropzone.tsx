import source from "./dropzone.tsx?raw";
import { FileUpload } from "@pisagor/solid";

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

export { source as DropzoneSource };
