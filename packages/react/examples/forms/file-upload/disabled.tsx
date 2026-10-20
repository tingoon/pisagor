import { Button, FileUpload } from "@pisagor/react";

export function Disabled() {
  return (
    <FileUpload
      disabled
      title="Drop files here"
      trigger={<Button>Browse files</Button>}
    />
  );
}
