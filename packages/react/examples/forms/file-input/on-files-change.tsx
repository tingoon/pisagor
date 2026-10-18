import { FileInput } from "@pisagor/react";

export function OnFilesChange() {
  return (
    <FileInput accept="image/*" multiple onFilesChange={() => undefined} />
  );
}
