import { NumberInput } from "@pisagor/solid";

export function Range() {
  return <NumberInput defaultValue="5" max={10} min={0} />;
}
