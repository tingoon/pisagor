import { Button, FileUpload } from "@pisagor/react";

export function Variants() {
  return (
    <div className="flex flex-col gap-2">
      <FileUpload
        title="Primary"
        trigger={<Button>Browse files</Button>}
        variant="primary"
      />
      <FileUpload
        title="Secondary"
        trigger={<Button>Browse files</Button>}
        variant="secondary"
      />
    </div>
  );
}
