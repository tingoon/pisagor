import { Button, FileUpload } from "@pisagor/react";

export function Invalid() {
  return (
    <FileUpload
      helper="This field is required."
      invalid
      title="Drop files here"
      trigger={<Button>Browse files</Button>}
    />
  );
}
