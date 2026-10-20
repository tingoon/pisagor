import { FileUpload } from "@pisagor/react";

export function CustomSpacing() {
  return (
    <FileUpload
      classNames={{
        dropzone: "[--space:--spacing(4)] md:[--space:--spacing(6)]",
      }}
      title="Drop your files here"
    />
  );
}
