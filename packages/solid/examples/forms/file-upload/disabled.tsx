import { Button, FileUpload } from "@pisagor/solid";

export function Disabled() {
  return (
    <FileUpload
      disabled
      title="Drop files here"
      trigger={(props) => <Button {...props}>Browse files</Button>}
    />
  );
}
