import { FileInput } from "@pisagor/react/file-input";

export function OnFilesChange() {
  return (
    <FileInput accept="image/*" multiple onFilesChange={() => undefined} />
  );
}
