import source from "./default.tsx?raw";
import { RichTextEditor } from "@pisagor/react/rich-text-editor";

export function Default() {
  return <RichTextEditor defaultValue="<p>Start writing…</p>" />;
}

export { source as DefaultSource };
