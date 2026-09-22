import { FolderIcon } from "@phosphor-icons/react";
import { Button } from "@pisagor/react";
import { FileUpload } from "..";
export function DirectoryUpload() {
  return (
    <FileUpload directory>
      <div className="flex justify-center">
        <FileUpload.Trigger asChild>
          <Button size="sm" variant="outline">
            <FolderIcon />
            Select folder
          </Button>
        </FileUpload.Trigger>
        <FileUpload.List />
      </div>
    </FileUpload>
  );
}
