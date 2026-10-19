import { FolderIcon } from "@phosphor-icons/react";
import { Button, FileUpload } from "@pisagor/react";

export function DirectoryUpload() {
  return (
    <FileUpload
      className="items-center"
      directory
      dropzone={false}
      trigger={
        <Button size="sm" variant="outline">
          <FolderIcon />
          Select folder
        </Button>
      }
    />
  );
}
