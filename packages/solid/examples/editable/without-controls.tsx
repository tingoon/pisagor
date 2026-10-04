/** @jsxImportSource solid-js */
import { Card, Field, Input } from "@pisagor/solid";
import { Editable } from "@pisagor/solid/editable";
export function WithoutControls() {
  return (
    <Card>
      <Card.Header
        description="Click the field to edit, press Enter to save, Escape to cancel"
        title="Edit without controls"
      />
      <Card.Content>
        <Field.Group>
          <Field>
            <Field.Label>Name</Field.Label>
            <Editable defaultValue="Jane Doe">
              <Editable.Area>
                <Editable.Input asChild={(props) => <Input {...props()} />} />
                <Editable.Preview />
              </Editable.Area>
            </Editable>
          </Field>
          <Field>
            <Field.Label>Email</Field.Label>
            <Editable defaultValue="jane.doe@example.com">
              <Editable.Area>
                <Editable.Input asChild={(props) => <Input {...props()} />} />
                <Editable.Preview />
              </Editable.Area>
            </Editable>
          </Field>
        </Field.Group>
      </Card.Content>
    </Card>
  );
}
