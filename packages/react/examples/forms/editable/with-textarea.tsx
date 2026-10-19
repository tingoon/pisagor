import { CheckIcon, XIcon } from "@phosphor-icons/react";
import { Button, Card, Editable, Field, Textarea } from "@pisagor/react";

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
                <Editable.Input asChild>
                  <Textarea className="min-h-24" />
                </Editable.Input>
                <Editable.Preview className="min-h-24" />
              </Editable.Area>
              <Editable.Control>
                <Editable.CancelTrigger asChild>
                  <Button aria-label="Cancel" size="icon-md" variant="outline">
                    <XIcon />
                  </Button>
                </Editable.CancelTrigger>
                <Editable.SubmitTrigger asChild>
                  <Button aria-label="Save" size="icon-md" variant="outline">
                    <CheckIcon />
                  </Button>
                </Editable.SubmitTrigger>
              </Editable.Control>
            </Editable.Root>
          </Field>
        </Field.Group>
      </Card.Content>
    </Card>
  );
}
