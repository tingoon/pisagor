import { CameraIcon } from "@phosphor-icons/react";
import { Button, FileUpload } from "@pisagor/react";

export function MediaCapture() {
  return (
    <FileUpload
      capture="environment"
      className="items-center"
      dropzone={false}
      trigger={
        <Button variant="outline">
          <CameraIcon />
          Take a picture
        </Button>
      }
    />
  );
}
