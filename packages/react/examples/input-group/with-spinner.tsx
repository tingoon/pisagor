import source from "./with-spinner.tsx?raw";
import { InputGroup, Spinner } from "@pisagor/react";
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

export { source as WithSpinnerSource };
