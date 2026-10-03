/** @jsxImportSource solid-js */
import { Spinner } from "@pisagor/solid";
import { InputGroup } from "@pisagor/solid/input-group";
export function WithSpinner() {
  return (
    <InputGroup data-disabled>
      <InputGroup.Input disabled placeholder="Loading..." />
      <InputGroup.Addon align="inline-end">
        <Spinner aria-label="Loading" />
      </InputGroup.Addon>
    </InputGroup>
  );
}
