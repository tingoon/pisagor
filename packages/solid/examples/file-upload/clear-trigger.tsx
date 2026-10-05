import { Button, FileUpload } from "@pisagor/solid";
import { TrashIcon } from "@pisagor/solid/icons";
export function ClearTrigger() {
  return (
    <FileUpload>
      <FileUpload.ClearTrigger
        asChild={(props) => (
          <Button
            {...props()}
            aria-label="Clear files"
            size="icon-sm"
            variant="ghost"
          >
            <TrashIcon />
          </Button>
        )}
        class="absolute top-2 right-2"
      />
      <FileUpload.Dropzone class="w-full">
        <FileUpload.DropzoneIcon />
        <FileUpload.Title>Drop files here</FileUpload.Title>
      </FileUpload.Dropzone>
      <FileUpload.List />
    </FileUpload>
  );
}
