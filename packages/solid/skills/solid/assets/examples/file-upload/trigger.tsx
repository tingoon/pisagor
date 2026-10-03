/** @jsxImportSource solid-js */

import { Button } from "@pisagor/solid";
import { FileUpload } from "@pisagor/solid/file-upload";
import { PaperclipIcon } from "@pisagor/solid/icons";
export function Trigger() {
  return (
    <FileUpload>
      <div class="flex justify-center">
        <FileUpload.Trigger
          asChild={(props) => (
            <Button {...props()} variant="outline">
              <PaperclipIcon />
              Browse files
            </Button>
          )}
        />
      </div>
      <FileUpload.List />
    </FileUpload>
  );
}
