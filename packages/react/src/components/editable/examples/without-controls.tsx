import { Card, Field, Input } from "@pisagor/react";
import { Editable } from "..";
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
                <Editable.Input asChild>
                  <Input />
                </Editable.Input>
                <Editable.Preview />
              </Editable.Area>
            </Editable>
          </Field>
          <Field>
            <Field.Label>Email</Field.Label>
            <Editable defaultValue="jane.doe@example.com">
              <Editable.Area>
                <Editable.Input asChild>
                  <Input />
                </Editable.Input>
                <Editable.Preview />
              </Editable.Area>
            </Editable>
          </Field>
        </Field.Group>
      </Card.Content>
    </Card>
  );
}
