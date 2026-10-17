import source from "./disabled.tsx?raw";
import { RichTextEditor } from "@pisagor/react/rich-text-editor";

export function Disabled() {
  return (
    <RichTextEditor
      defaultValue="<p>This content is read-only for now.</p>"
      disabled
    />
  );
}

export { source as DisabledSource };
