import { CheckIcon, PencilSimpleIcon } from "@phosphor-icons/react";
import { Button, Card, Editable, Field, Input } from "@pisagor/react";
import { useState } from "react";

export function Controlled() {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <Card>
      <Card.Header>
        <Card.Title>Edit user</Card.Title>
        <Card.Description>
          Click the edit button to start editing
        </Card.Description>
        <Card.Action>
          <Button
            onClick={() => setIsEditing((prev) => !prev)}
            variant={isEditing ? "outline" : "ghost"}
          >
            {isEditing ? (
              <>
                <CheckIcon /> Save
              </>
            ) : (
              <>
                <PencilSimpleIcon /> Edit
              </>
            )}
          </Button>
        </Card.Action>
      </Card.Header>
      <Card.Content>
        <Field.Group>
          <Field>
            <Field.Label>Name</Field.Label>
            <Editable.Root
              activationMode="none"
              defaultValue="Jane Doe"
              edit={isEditing}
            >
              <Editable.Area>
                <Editable.Input asChild>
                  <Input />
                </Editable.Input>
                <Editable.Preview />
              </Editable.Area>
            </Editable.Root>
          </Field>
          <Field>
            <Field.Label>Username</Field.Label>
            <Editable.Root
              activationMode="none"
              defaultValue="@jane.doe"
              edit={isEditing}
            >
              <Editable.Area>
                <Editable.Input asChild>
                  <Input />
                </Editable.Input>
                <Editable.Preview />
              </Editable.Area>
            </Editable.Root>
          </Field>
        </Field.Group>
      </Card.Content>
    </Card>
  );
}
