import { InputGroup } from "..";

export function Invalid() {
  return (
    <InputGroup>
      <InputGroup.Addon>
        <InputGroup.Text>https://</InputGroup.Text>
      </InputGroup.Addon>
      <InputGroup.Input
        aria-invalid
        className="pl-1!"
        placeholder="example.com"
      />
    </InputGroup>
  );
}
