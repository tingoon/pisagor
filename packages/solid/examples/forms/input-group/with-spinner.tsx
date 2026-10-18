import { InputGroup, Spinner } from "@pisagor/solid";
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
