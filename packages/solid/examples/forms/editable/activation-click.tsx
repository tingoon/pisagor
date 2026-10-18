import { Button, Card, Editable, Field, Input } from "@pisagor/solid";
import { CheckIcon, XIcon } from "@pisagor/solid/icons";
export function ActivationClick() {
  return (
    <Card>
      <Card.Header
        description="Click the text to start editing"
        title="Edit with click"
      />
      <Card.Content>
        <Field.Group>
          <Field>
            <Field.Label>Name</Field.Label>
            <Editable activationMode="click" defaultValue="Jane Doe">
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
            </Editable>
          </Field>
          <Field>
            <Field.Label>Username</Field.Label>
            <Editable activationMode="click" defaultValue="@jane.doe">
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
            </Editable>
          </Field>
        </Field.Group>
      </Card.Content>
    </Card>
  );
}
