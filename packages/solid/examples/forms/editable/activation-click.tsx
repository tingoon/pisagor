import { CheckIcon, XIcon } from "@squidlab/phosphor-solid/icons";
import { Button, Card, Editable, Field, Input } from "@pisagor/solid";

export function ActivationClick() {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Edit with click</Card.Title>
        <Card.Description>Click the text to start editing</Card.Description>
      </Card.Header>
      <Card.Content>
        <Field.Group>
          <Field>
            <Field.Label>Name</Field.Label>
            <Editable.Root activationMode="click" defaultValue="Jane Doe">
              <Editable.Area>
                <Editable.Input asChild={(props) => <Input {...props()} />} />
                <Editable.Preview />
              </Editable.Area>
              <Editable.Control>
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
            <Editable.Root activationMode="click" defaultValue="@jane.doe">
              <Editable.Area>
                <Editable.Input asChild={(props) => <Input {...props()} />} />
                <Editable.Preview />
              </Editable.Area>
              <Editable.Control>
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
