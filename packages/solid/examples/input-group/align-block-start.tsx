import { InputGroup } from "@pisagor/solid";
import { CopyIcon, FileCodeIcon } from "@pisagor/solid/icons";
export function AlignBlockStart() {
  return (
    <div class="flex flex-col gap-2">
      <InputGroup>
        <InputGroup.Textarea
          class="font-mono text-sm"
          placeholder="console.log('Hello, world!');"
        />
        <InputGroup.Addon align="block-start">
          <FileCodeIcon class="text-muted-foreground" />
          <InputGroup.Text class="font-mono">script.js</InputGroup.Text>
          <InputGroup.Button aria-label="Copy" class="ml-auto" size="icon-xs">
            <CopyIcon />
            <span class="sr-only">Copy</span>
          </InputGroup.Button>
        </InputGroup.Addon>
      </InputGroup>
      <p class="text-muted-foreground text-sm">
        Header positioned above the textarea.
      </p>
    </div>
  );
}
