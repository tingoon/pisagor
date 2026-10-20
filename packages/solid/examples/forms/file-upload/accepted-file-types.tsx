import { FileUpload } from "@pisagor/solid";

export function AcceptedFileTypes() {
  return (
    <FileUpload
      accept="image/png,image/jpeg"
      classNames={{ dropzone: "w-full" }}
      helper="Only PNG and JPEG formats are allowed."
      title="Drop your images here"
    />
  );
}
