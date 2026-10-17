import source from "./multiple.tsx?raw";
import { FileInput } from "@pisagor/solid";

export function Multiple() {
  return <FileInput multiple />;
}

export { source as MultipleSource };
