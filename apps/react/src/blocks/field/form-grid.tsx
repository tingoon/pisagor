import { Field, Input } from "@pisagor/react";
import { formGridBlock } from "@pisagor/recipes/blocks/field";

const styles = formGridBlock();

export function FormGrid() {
  return (
    <Field.Group className={styles.group()}>
      <Field>
        <Field.Label>First name</Field.Label>
        <Input placeholder="John" />
      </Field>
      <Field>
        <Field.Label>Last name</Field.Label>
        <Input placeholder="Doe" />
      </Field>
      <Field className={styles.span()}>
        <Field.Label>Address</Field.Label>
        <Input placeholder="123 Main St" />
      </Field>
    </Field.Group>
  );
}
