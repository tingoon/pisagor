import { RichTextEditor } from "@pisagor/react/rich-text-editor";
import { useState } from "react";

export function Controlled() {
  const [value, setValue] = useState("<p>Controlled content</p>");

  return (
    <div className="flex w-full flex-col gap-3">
      <RichTextEditor onValueChange={setValue} value={value} />
      <pre className="overflow-auto rounded-lg bg-muted p-3 text-xs">
        {value}
      </pre>
    </div>
  );
}
