import { PaperclipIcon } from "@phosphor-icons/react";
import { Button, FileUpload } from "@pisagor/react";

export function Trigger() {
  return (
    <FileUpload
      className="items-center"
      dropzone={false}
      trigger={
        <Button variant="outline">
          <PaperclipIcon />
          Browse files
        </Button>
      }
    />
  );
}
