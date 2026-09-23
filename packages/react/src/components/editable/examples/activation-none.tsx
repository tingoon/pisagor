import { CheckIcon, PencilSimpleIcon, XIcon } from "@phosphor-icons/react";
import { Button, Card, Field, Input } from "@pisagor/react";
import { Editable } from "..";
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
                <Editable.Input asChild>
                  <Input />
                </Editable.Input>
                <Editable.Preview />
              </Editable.Area>
              <Editable.Control>
                <Editable.EditTrigger asChild>
                  <Button aria-label="Edit" size="icon-md" variant="outline">
                    <PencilSimpleIcon />
                  </Button>
                </Editable.EditTrigger>
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
            <Editable activationMode="none" defaultValue="@jane.doe">
              <Editable.Area>
                <Editable.Input asChild>
                  <Input />
                </Editable.Input>
                <Editable.Preview />
              </Editable.Area>
              <Editable.Control>
                <Editable.EditTrigger asChild>
                  <Button aria-label="Edit" size="icon-md" variant="outline">
                    <PencilSimpleIcon />
                  </Button>
                </Editable.EditTrigger>
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
