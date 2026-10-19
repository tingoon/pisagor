import { FileUpload } from "@pisagor/react";

export function RejectedFiles() {
  return (
    <FileUpload
      accept="image/*"
      classNames={{ dropzone: "w-full" }}
      helper="Images only, max 1 MB each."
      maxFileSize={1024 * 1024}
      maxFiles={3}
      title="Drop up to 3 images"
    />
  );
}
