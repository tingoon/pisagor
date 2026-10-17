import source from "./formatted.tsx?raw";
import { NumberInput } from "@pisagor/react";

export function Formatted() {
  return (
    <NumberInput
      defaultValue="1250"
      formatOptions={{ currency: "USD", style: "currency" }}
    />
  );
}

export { source as FormattedSource };
