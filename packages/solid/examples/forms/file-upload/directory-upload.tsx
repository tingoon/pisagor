import { FolderIcon } from "@squidlab/phosphor-solid/icons";
import { Button, FileUpload } from "@pisagor/solid";

export function DirectoryUpload() {
  return (
    <FileUpload
      class="items-center"
      directory
      dropzone={false}
      trigger={
        <Button size="sm" variant="outline">
          <FolderIcon />
          Select folder
        </Button>
      }
    />
  );
}
