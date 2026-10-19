import { Button, FileUpload, Separator } from "@pisagor/solid";

export function Default() {
  return (
    <FileUpload
      description={
        <div class="flex items-center justify-center gap-2">
          <Separator />
          or
          <Separator />
        </div>
      }
      helper="You can upload up to 2 files at a time."
      title="Drop files here"
      trigger={(props) => <Button {...props}>Browse files</Button>}
    />
  );
}
