import { useFileUpload } from "@ark-ui/react/file-upload";
import { XIcon } from "@phosphor-icons/react";
import { Button } from "@pisagor/react";
import { FileUpload } from "..";
export function CustomPreview() {
  const CustomPreviewList = () => {
    const fileUpload = useFileUpload();

    const files = fileUpload.acceptedFiles;

    if (files.length === 0) {
      return null;
    }

    return (
      <FileUpload.ItemGroup className="grid grid-cols-4 gap-2">
        {files.map((file) => (
          <FileUpload.Item file={file} key={file.name}>
            <FileUpload.ItemPreview className="size-auto w-full rounded-2xl" type="image/*">
              <FileUpload.ItemPreviewImage />
            </FileUpload.ItemPreview>
            <FileUpload.ItemDeleteTrigger asChild>
              <Button
                aria-label="Remove file"
                className="absolute -top-2 -right-2"
                pill
                size="icon-xs"
              >
                <XIcon />
              </Button>
            </FileUpload.ItemDeleteTrigger>
          </FileUpload.Item>
        ))}
      </FileUpload.ItemGroup>
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
