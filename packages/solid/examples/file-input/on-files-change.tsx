/** @jsxImportSource solid-js */
import { FileInput } from "@pisagor/solid/file-input";

export function OnFilesChange() {
  return (
    <FileInput accept="image/*" multiple onFilesChange={() => undefined} />
  );
}
