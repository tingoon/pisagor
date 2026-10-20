import { NumberInput } from "@pisagor/solid";

export function Formatted() {
  return (
    <NumberInput
      defaultValue="1250"
      formatOptions={{ currency: "USD", style: "currency" }}
    />
  );
}
