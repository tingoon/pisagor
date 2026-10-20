import { PaperclipIcon } from "@squidlab/phosphor-solid/icons";
import { Button, FileUpload } from "@pisagor/solid";

export function Trigger() {
  return (
    <FileUpload
      class="items-center"
      dropzone={false}
      trigger={(props) => (
        <Button {...props} variant="outline">
          <PaperclipIcon />
          Browse files
        </Button>
      )}
    />
  );
}
