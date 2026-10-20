import { TrashIcon } from "@phosphor-icons/react";
import { Button, FileUpload } from "@pisagor/react";

export function ClearTrigger() {
  return (
    <FileUpload
      classNames={{
        clearTrigger: "absolute top-2 right-2",
        dropzone: "w-full",
      }}
      clearTrigger={
        <Button size="icon-sm" variant="ghost">
          <TrashIcon />
        </Button>
      }
      title="Drop files here"
    />
  );
}
