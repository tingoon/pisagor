import { useFileUploadContext } from "@ark-ui/solid";
import { UploadIcon, XIcon } from "@squidlab/phosphor-solid/icons";
import { Button, FileUpload } from "@pisagor/solid";
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
    <FileUpload.Root accept="image/*">
      <FileUpload.Dropzone>
        <UploadIcon class="text-muted-foreground size-5" />
        <span class="text-sm font-medium">Drop files here</span>
      </FileUpload.Dropzone>
      <CustomPreviewList />
    </FileUpload.Root>
  );
}
