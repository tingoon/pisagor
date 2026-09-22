import { PaperclipIcon } from "@phosphor-icons/react";
import { Button } from "@pisagor/react";
import { FileUpload } from "..";
export function Trigger() {
  return (
    <FileUpload>
      <div className="flex justify-center">
        <FileUpload.Trigger asChild>
          <Button variant="outline">
            <PaperclipIcon />
            Browse files
          </Button>
        </FileUpload.Trigger>
      </div>
      <FileUpload.List />
    </FileUpload>
  );
}
