/** @jsxImportSource solid-js */
import { FileInput } from "@pisagor/solid";

export function OnFilesChange() {
  return (
    <FileInput accept="image/*" multiple onFilesChange={() => undefined} />
  );
}
