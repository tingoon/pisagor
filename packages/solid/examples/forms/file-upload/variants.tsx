import { Button, FileUpload } from "@pisagor/solid";

export function Variants() {
  return (
    <div class="flex flex-col gap-2">
      <FileUpload
        title="Primary"
        trigger={(props) => <Button {...props}>Browse files</Button>}
        variant="primary"
      />
      <FileUpload
        title="Secondary"
        trigger={(props) => <Button {...props}>Browse files</Button>}
        variant="secondary"
      />
    </div>
  );
}
