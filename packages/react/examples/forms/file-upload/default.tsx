import { Button, FileUpload, Separator } from "@pisagor/react";

export function Default() {
  return (
    <FileUpload
      description={
        <div className="flex items-center justify-center gap-2">
          <Separator />
          or
          <Separator />
        </div>
      }
      helper="You can upload up to 2 files at a time."
      title="Drop files here"
      trigger={<Button>Browse files</Button>}
    />
  );
}
