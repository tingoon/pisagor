import { useFileUploadContext } from "@ark-ui/solid/file-upload";
import { Button, FileUpload } from "@pisagor/solid";
import { XIcon } from "@pisagor/solid/icons";
import { For, Show } from "solid-js";

export function CustomPreview() {
  const CustomPreviewList = () => {
    const fileUpload = useFileUploadContext();
    const files = () => fileUpload().acceptedFiles;

    return (
      <Show when={files().length > 0}>
        <FileUpload.ItemGroup class="grid grid-cols-4 gap-2">
          <For each={files()}>
            {(file) => (
              <FileUpload.Item file={file}>
                <FileUpload.ItemPreview
                  class="size-auto w-full rounded-2xl"
                  type="image/*"
                >
                  <FileUpload.ItemPreviewImage />
                </FileUpload.ItemPreview>
                <FileUpload.ItemDeleteTrigger
                  asChild={(props) => (
                    <Button
                      {...props()}
                      aria-label="Remove file"
                      class="absolute -top-2 -right-2"
                      pill
                      size="icon-xs"
                    >
                      <XIcon />
                    </Button>
                  )}
                />
              </FileUpload.Item>
            )}
          </For>
        </FileUpload.ItemGroup>
      </Show>
    );
  };
  return (
    <FileUpload accept="image/*">
      <FileUpload.Dropzone>
        <FileUpload.DropzoneIcon />
        <FileUpload.Title>Drop files here</FileUpload.Title>
      </FileUpload.Dropzone>
      <CustomPreviewList />
    </FileUpload>
  );
}
