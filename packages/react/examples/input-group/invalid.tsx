import source from "./invalid.tsx?raw";
import { InputGroup } from "@pisagor/react";

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

export { source as InvalidSource };
