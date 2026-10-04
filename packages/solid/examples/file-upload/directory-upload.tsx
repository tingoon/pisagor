/** @jsxImportSource solid-js */

import { Button, FileUpload } from "@pisagor/solid";
import { FolderIcon } from "@pisagor/solid/icons";
export function DirectoryUpload() {
  return (
    <FileUpload directory>
      <div class="flex justify-center">
        <FileUpload.Trigger
          asChild={(props) => (
            <Button {...props()} size="sm" variant="outline">
              <FolderIcon />
              Select folder
            </Button>
          )}
        />
        <FileUpload.List />
      </div>
    </FileUpload>
  );
}
