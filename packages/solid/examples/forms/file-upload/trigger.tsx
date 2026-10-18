import { Button, FileUpload } from "@pisagor/solid";
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
