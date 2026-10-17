import source from "./invalid.tsx?raw";
import { NumberField } from "@pisagor/react-form";

export function Invalid() {
  return (
    <NumberField
      error="Quantity must be at least 1."
      id="number-field-quantity-invalid"
      invalid
      label="Quantity"
      max={10}
      min={1}
      value={0}
    />
  );
}

export { source as InvalidSource };
