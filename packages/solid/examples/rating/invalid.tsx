import source from "./invalid.tsx?raw";
import { Field, Rating } from "@pisagor/solid";

export function Invalid() {
  return (
    <Field invalid>
      <Rating defaultValue={2} />
    </Field>
  );
}

export { source as InvalidSource };
