import { Field } from "@pisagor/react/field";
import { Input } from "@pisagor/react/input";

export function FormGrid() {
  return (
    <Field.Group className="grid grid-cols-2">
      <Field>
        <Field.Label>First name</Field.Label>
        <Input placeholder="John" />
      </Field>
      <Field>
        <Field.Label>Last name</Field.Label>
        <Input placeholder="Doe" />
      </Field>
      <Field className="col-span-2">
        <Field.Label>Address</Field.Label>
        <Input placeholder="123 Main St" />
      </Field>
    </Field.Group>
  );
}
