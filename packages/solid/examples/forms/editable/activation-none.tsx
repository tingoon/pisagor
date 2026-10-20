import {
  CheckIcon,
  PencilSimpleIcon,
  XIcon,
} from "@squidlab/phosphor-solid/icons";
import { Button, Card, Editable, Field, Input } from "@pisagor/solid";

export function ActivationNone() {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Edit with manual trigger</Card.Title>
        <Card.Description>
          Use the edit button to start editing (no automatic activation)
        </Card.Description>
      </Card.Header>
      <Card.Content>
        <Field.Group>
          <Field>
            <Field.Label>Name</Field.Label>
            <Editable.Root activationMode="none" defaultValue="Jane Doe">
              <Editable.Area>
                <Editable.Input asChild={(props) => <Input {...props()} />} />
                <Editable.Preview />
              </Editable.Area>
              <Editable.Control>
                <Editable.EditTrigger
                  asChild={(props) => (
                    <Button
                      {...props()}
                      aria-label="Edit"
                      size="icon-md"
                      variant="outline"
                    >
                      <PencilSimpleIcon />
                    </Button>
                  )}
                />
                <Editable.CancelTrigger
                  asChild={(props) => (
                    <Button
                      {...props()}
                      aria-label="Cancel"
                      size="icon-md"
                      variant="outline"
                    >
                      <XIcon />
                    </Button>
                  )}
                />
                <Editable.SubmitTrigger
                  asChild={(props) => (
                    <Button
                      {...props()}
                      aria-label="Save"
                      size="icon-md"
                      variant="outline"
                    >
                      <CheckIcon />
                    </Button>
                  )}
                />
              </Editable.Control>
            </Editable.Root>
          </Field>
          <Field>
            <Field.Label>Username</Field.Label>
            <Editable.Root activationMode="none" defaultValue="@jane.doe">
              <Editable.Area>
                <Editable.Input asChild={(props) => <Input {...props()} />} />
                <Editable.Preview />
              </Editable.Area>
              <Editable.Control>
                <Editable.EditTrigger
                  asChild={(props) => (
                    <Button
                      {...props()}
                      aria-label="Edit"
                      size="icon-md"
                      variant="outline"
                    >
                      <PencilSimpleIcon />
                    </Button>
                  )}
                />
                <Editable.CancelTrigger
                  asChild={(props) => (
                    <Button
                      {...props()}
                      aria-label="Cancel"
                      size="icon-md"
                      variant="outline"
                    >
                      <XIcon />
                    </Button>
                  )}
                />
                <Editable.SubmitTrigger
                  asChild={(props) => (
                    <Button
                      {...props()}
                      aria-label="Save"
                      size="icon-md"
                      variant="outline"
                    >
                      <CheckIcon />
                    </Button>
                  )}
                />
              </Editable.Control>
            </Editable.Root>
          </Field>
        </Field.Group>
      </Card.Content>
    </Card>
  );
}
