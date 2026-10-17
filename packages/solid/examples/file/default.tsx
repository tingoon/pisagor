import source from "./default.tsx?raw";
import { File } from "@pisagor/solid";

export function Default() {
  return <File name="report.pdf" size={1024 * 42} />;
}

export { source as DefaultSource };
