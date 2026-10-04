/** @jsxImportSource solid-js */

import { Button, FileUpload } from "@pisagor/solid";
import { CameraIcon } from "@pisagor/solid/icons";
export function MediaCapture() {
  return (
    <FileUpload capture="environment">
      <div class="flex justify-center">
        <FileUpload.Trigger
          asChild={(props) => (
            <Button {...props()} variant="outline">
              <CameraIcon />
              Take a picture
            </Button>
          )}
        />
      </div>
      <FileUpload.List />
    </FileUpload>
  );
}
