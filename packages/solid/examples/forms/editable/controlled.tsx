import { CheckIcon, PencilSimpleIcon } from "@squidlab/phosphor-solid/icons";
import { Button, Card, Editable, Field, Input } from "@pisagor/solid";
import { createSignal } from "solid-js";

export function Controlled() {
  const [isEditing, setIsEditing] = createSignal(false);

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
            variant={isEditing() ? "outline" : "ghost"}
          >
            {isEditing() ? (
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
              edit={isEditing()}
            >
              <Editable.Area>
                <Editable.Input asChild={(props) => <Input {...props()} />} />
                <Editable.Preview />
              </Editable.Area>
            </Editable.Root>
          </Field>
          <Field>
            <Field.Label>Username</Field.Label>
            <Editable.Root
              activationMode="none"
              defaultValue="@jane.doe"
              edit={isEditing()}
            >
              <Editable.Area>
                <Editable.Input asChild={(props) => <Input {...props()} />} />
                <Editable.Preview />
              </Editable.Area>
            </Editable.Root>
          </Field>
        </Field.Group>
      </Card.Content>
    </Card>
  );
}
