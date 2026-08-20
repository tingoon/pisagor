import { CopyIcon, FileCodeIcon } from "@phosphor-icons/react";
import { InputGroup } from "@pisagor/react";

export function CodeEditorInput() {
  return (
    <InputGroup>
      <InputGroup.Textarea
        className="font-mono text-sm"
        placeholder="console.log('Hello, world!');"
      />
      <InputGroup.Addon align="block-start">
        <FileCodeIcon className="text-muted-foreground" />
        <InputGroup.Text className="font-mono">script.js</InputGroup.Text>
        <InputGroup.Button aria-label="Copy" className="ml-auto" size="icon-xs">
          <CopyIcon />
        </InputGroup.Button>
      </InputGroup.Addon>
    </InputGroup>
  );
}
