import { CheckIcon, XIcon } from "@squidlab/phosphor-solid/icons";
import { Button, Card, Editable, Field, Textarea } from "@pisagor/solid";

export function WithTextarea() {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Edit description</Card.Title>
        <Card.Description>
          Double-click the text to start editing
        </Card.Description>
      </Card.Header>
      <Card.Content>
        <Field.Group>
          <Field>
            <Field.Label>Description</Field.Label>
            <Editable.Root>
              <Editable.Area>
                <Editable.Input
                  asChild={(props) => (
                    <Textarea {...props()} class="min-h-24" />
                  )}
                />
                <Editable.Preview class="min-h-24" />
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
