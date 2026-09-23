import { CameraIcon } from "@phosphor-icons/react";
import { Button } from "@pisagor/react";
import { FileUpload } from "..";
export function MediaCapture() {
  return (
    <FileUpload capture="environment">
      <div className="flex justify-center">
        <FileUpload.Trigger asChild>
          <Button variant="outline">
            <CameraIcon />
            Take a picture
          </Button>
        </FileUpload.Trigger>
      </div>
      <FileUpload.List />
    </FileUpload>
  );
}
