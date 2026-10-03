import { CheckIcon, XIcon } from "@phosphor-icons/react";
import { Button, Card, Editable, Field, Input } from "@pisagor/react";
import { editableUserCardBlock } from "@pisagor/recipes/blocks/editors";
import { cn } from "@pisagor/utils";

const styles = editableUserCardBlock();

export interface EditableUserCardProps {
  className?: string;
}

export function EditableUserCard({ className }: EditableUserCardProps) {
  return (
    <Card className={cn(styles.root(), className)}>
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
                  <Input className={styles.root()} />
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
            <Editable defaultValue="@jane.doe">
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
