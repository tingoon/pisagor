import { FileUpload } from "@pisagor/solid";

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
