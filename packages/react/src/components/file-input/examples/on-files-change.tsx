import { FileInput } from "..";

export function OnFilesChange() {
  return <FileInput accept="image/*" multiple onFilesChange={() => undefined} />;
}
