import { InputGroup } from "../../../../../src/components/input-group/index";

export function Default() {
  return (
    <InputGroup>
      <InputGroup.Input placeholder="Search..." />
      <InputGroup.Addon>
        <span aria-hidden="true">⌕</span>
      </InputGroup.Addon>
    </InputGroup>
  );
}
