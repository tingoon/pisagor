import { Button, FileUpload } from "@pisagor/solid";

export function Invalid() {
  return (
    <FileUpload
      helper="This field is required."
      invalid
      title="Drop files here"
      trigger={(props) => <Button {...props}>Browse files</Button>}
    />
  );
}
