import { CheckIcon, XIcon } from "@phosphor-icons/react";
import { Button } from "@pisagor/react/button";
import { Card } from "@pisagor/react/card";
import { Editable } from "@pisagor/react/editable";
import { Field } from "@pisagor/react/field";
import { Input } from "@pisagor/react/input";
import { cn } from "@pisagor/utils";

export interface EditableUserCardProps {
  className?: string;
}

export function EditableUserCard({ className }: EditableUserCardProps) {
  return (
    <Card className={cn("w-full max-w-sm", className)}>
      <Card.Header
        description="Click in the field or edit button to start editing"
        title="Edit user"
      />
      <Card.Content>
        <Field.Group>
          <Field>
            <Field.Label>Name</Field.Label>
            <Editable defaultValue="Jane Doe">
              <Editable.Area>
                <Editable.Input asChild>
                  <Input className="w-full" />
                </Editable.Input>
                <Editable.Preview />
              </Editable.Area>
              <Editable.Control>
                <Editable.CancelTrigger asChild>
                  <Button size="icon-md" variant="outline">
                    <XIcon />
                  </Button>
                </Editable.CancelTrigger>
                <Editable.SubmitTrigger asChild>
                  <Button size="icon-md" variant="outline">
                    <CheckIcon />
                  </Button>
                </Editable.SubmitTrigger>
              </Editable.Control>
            </Editable>
          </Field>
          <Field>
            <Field.Label>Username</Field.Label>
            <Editable defaultValue="@jane.doe">
              <Editable.Area>
                <Editable.Input asChild>
                  <Input />
                </Editable.Input>
                <Editable.Preview />
              </Editable.Area>
              <Editable.Control>
                <Editable.CancelTrigger asChild>
                  <Button size="icon-md" variant="outline">
                    <XIcon />
                  </Button>
                </Editable.CancelTrigger>
                <Editable.SubmitTrigger asChild>
                  <Button size="icon-md" variant="outline">
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
