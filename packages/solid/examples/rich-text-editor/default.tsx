import source from "./default.tsx?raw";
import { RichTextEditor } from "@pisagor/solid/rich-text-editor";

export function Default() {
  return <RichTextEditor defaultValue="<p>Hello from Solid TipTap.</p>" />;
}

export { source as DefaultSource };
