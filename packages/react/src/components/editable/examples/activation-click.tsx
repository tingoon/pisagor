import { CheckIcon, XIcon } from "@phosphor-icons/react";
import { Button, Card, Field, Input } from "@pisagor/react";
import { Editable } from "..";
export function ActivationClick() {
  return (
    <Card>
      <Card.Header description="Click the text to start editing" title="Edit with click" />
      <Card.Content>
        <Field.Group>
          <Field>
            <Field.Label>Name</Field.Label>
            <Editable activationMode="click" defaultValue="Jane Doe">
              <Editable.Area>
                <Editable.Input asChild>
                  <Input />
                </Editable.Input>
                <Editable.Preview />
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
            </Editable>
          </Field>
          <Field>
            <Field.Label>Username</Field.Label>
            <Editable activationMode="click" defaultValue="@jane.doe">
              <Editable.Area>
                <Editable.Input asChild>
                  <Input />
                </Editable.Input>
                <Editable.Preview />
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
            </Editable>
          </Field>
        </Field.Group>
      </Card.Content>
    </Card>
  );
}
