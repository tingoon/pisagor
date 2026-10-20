import { CameraIcon } from "@squidlab/phosphor-solid/icons";
import { Button, FileUpload } from "@pisagor/solid";

export function MediaCapture() {
  return (
    <FileUpload
      capture="environment"
      class="items-center"
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
