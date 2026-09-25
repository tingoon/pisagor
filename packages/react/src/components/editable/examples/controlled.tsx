import { CheckIcon, PencilSimpleIcon } from "@phosphor-icons/react";
import { Button, Card, Field, Input } from "@pisagor/react";
import { useState } from "react";
import { Editable } from "..";
export function Controlled() {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <Card>
      <Card.Header
        description="Click the edit button to start editing"
        title="Edit user"
      >
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
            <Editable
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
            </Editable>
          </Field>
          <Field>
            <Field.Label>Username</Field.Label>
            <Editable
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
            </Editable>
          </Field>
        </Field.Group>
      </Card.Content>
    </Card>
  );
}
