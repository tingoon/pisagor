import source from "./on-files-change.tsx?raw";
import { FileInput } from "@pisagor/react";

export function OnFilesChange() {
  return (
    <FileInput accept="image/*" multiple onFilesChange={() => undefined} />
  );
}

export { source as OnFilesChangeSource };
