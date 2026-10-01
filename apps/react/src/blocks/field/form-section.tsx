import { Button, Field, Input, Surface } from "@pisagor/react";
import { formSectionBlock } from "@pisagor/recipes/blocks/field";

const styles = formSectionBlock();

export function FormSection() {
  return (
    <Surface bordered className={styles.root()} padding="lg" rounded>
      <Field.Group>
        <Field>
          <Field.Label>Name</Field.Label>
          <Input placeholder="First name" />
        </Field>
        <Field>
          <Field.Label>Email</Field.Label>
          <Input placeholder="you@example.com" type="email" />
          <Field.Description>
            We'll use this email to contact you
          </Field.Description>
        </Field>
        <Field orientation="horizontal" reverse>
          <Button>Submit</Button>
          <Button variant="outline">Reset</Button>
        </Field>
      </Field.Group>
    </Surface>
  );
}
