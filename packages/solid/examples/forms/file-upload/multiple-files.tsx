import { Button, FileUpload, Separator } from "@pisagor/solid";

export function MultipleFiles() {
  return (
    <FileUpload
      description={
        <div class="flex items-center justify-center gap-2">
          <Separator />
          or
          <Separator />
        </div>
      }
      helper="You can upload up to 5 files at a time."
      maxFiles={5}
      title="Drop files here"
      trigger={(props) => <Button {...props}>Browse files</Button>}
    />
  );
}
