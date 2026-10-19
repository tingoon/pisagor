import { useFileUploadContext } from "@ark-ui/react";
import { UploadIcon, XIcon } from "@phosphor-icons/react";
import { Button, FileUpload } from "@pisagor/react";

export function CustomPreview() {
  const CustomPreviewList = () => {
    const fileUpload = useFileUploadContext();

    const files = fileUpload.acceptedFiles;

    if (files.length === 0) {
      return null;
    }

    return (
      <FileUpload.ItemGroup className="grid grid-cols-4 gap-2">
        {files.map((file) => (
          <FileUpload.Item file={file} key={file.name}>
            <FileUpload.ItemPreview
              className="size-auto w-full rounded-2xl"
              type="image/*"
            >
              <FileUpload.ItemPreviewImage />
            </FileUpload.ItemPreview>
            <FileUpload.ItemDeleteTrigger asChild>
              <Button className="absolute -top-2 -right-2" pill size="icon-xs">
                <XIcon />
              </Button>
            </FileUpload.ItemDeleteTrigger>
          </FileUpload.Item>
        ))}
      </FileUpload.ItemGroup>
    );
  };

  return (
    <FileUpload.Root accept="image/*">
      <FileUpload.Dropzone>
        <UploadIcon className="text-muted-foreground size-5" />
        <span className="text-sm font-medium">Drop files here</span>
      </FileUpload.Dropzone>
      <CustomPreviewList />
    </FileUpload.Root>
  );
}
