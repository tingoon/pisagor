import { CopyIcon, FileCodeIcon } from "@phosphor-icons/react";
import { InputGroup } from "..";
export function AlignBlockStart() {
  return (
    <div className="flex flex-col gap-2">
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
            <span className="sr-only">Copy</span>
          </InputGroup.Button>
        </InputGroup.Addon>
      </InputGroup>
      <p className="text-muted-foreground text-sm">Header positioned above the textarea.</p>
    </div>
  );
}
