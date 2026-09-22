import { InputGroup } from "..";
export function AlignBlockEnd() {
  return (
    <div className="flex flex-col gap-2">
      <InputGroup>
        <InputGroup.Textarea placeholder="Write a comment..." />
        <InputGroup.Addon align="block-end">
          <InputGroup.Text>0/280</InputGroup.Text>
          <InputGroup.Button className="ml-auto" size="xs">
            Post
          </InputGroup.Button>
        </InputGroup.Addon>
      </InputGroup>
      <p className="text-muted-foreground text-sm">Footer positioned below the textarea.</p>
    </div>
  );
}
