import { TrashIcon } from "@phosphor-icons/react";
import { Button } from "@pisagor/react";
import { FileUpload } from "..";
export function ClearTrigger() {
  return (
    <FileUpload>
      <FileUpload.ClearTrigger asChild className="absolute top-2 right-2">
        <Button aria-label="Clear files" size="icon-sm" variant="ghost">
          <TrashIcon />
        </Button>
      </FileUpload.ClearTrigger>
      <FileUpload.Dropzone className="w-full">
        <FileUpload.DropzoneIcon />
        <FileUpload.Title>Drop files here</FileUpload.Title>
      </FileUpload.Dropzone>
      <FileUpload.List />
    </FileUpload>
  );
}
