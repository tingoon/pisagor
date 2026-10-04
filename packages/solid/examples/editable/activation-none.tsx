/** @jsxImportSource solid-js */

import { Button, Card, Editable, Field, Input } from "@pisagor/solid";
import { CheckIcon, PencilSimpleIcon, XIcon } from "@pisagor/solid/icons";
export function ActivationNone() {
  return (
    <Card>
      <Card.Header
        description="Use the edit button to start editing (no automatic activation)"
        title="Edit with manual trigger"
      />
      <Card.Content>
        <Field.Group>
          <Field>
            <Field.Label>Name</Field.Label>
            <Editable activationMode="none" defaultValue="Jane Doe">
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
            </Editable>
          </Field>
          <Field>
            <Field.Label>Username</Field.Label>
            <Editable activationMode="none" defaultValue="@jane.doe">
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
            </Editable>
          </Field>
        </Field.Group>
      </Card.Content>
    </Card>
  );
}
