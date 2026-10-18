import { Button, Card, Editable, Field, Textarea } from "@pisagor/solid";
import { CheckIcon, XIcon } from "@pisagor/solid/icons";
export function WithTextarea() {
  return (
    <Card>
      <Card.Header
        description="Double-click the text to start editing"
        title="Edit description"
      />
      <Card.Content>
        <Field.Group>
          <Field>
            <Field.Label>Description</Field.Label>
            <Editable>
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
            </Editable>
          </Field>
        </Field.Group>
      </Card.Content>
    </Card>
  );
}
