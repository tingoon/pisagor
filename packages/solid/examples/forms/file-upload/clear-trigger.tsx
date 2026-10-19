import { TrashIcon } from "@squidlab/phosphor-solid/icons";
import { Button, FileUpload } from "@pisagor/solid";

export function ClearTrigger() {
  return (
    <FileUpload
      classNames={{
        clearTrigger: "absolute top-2 right-2",
        dropzone: "w-full",
      }}
      clearTrigger={(props) => (
        <Button {...props} size="icon-sm" variant="ghost">
          <TrashIcon />
        </Button>
      )}
      title="Drop files here"
    />
  );
}
