/** @jsxImportSource solid-js */

import { Button, Card, Editable, Field, Input } from "@pisagor/solid";
import { CheckIcon, XIcon } from "@pisagor/solid/icons";
import { cn } from "@pisagor/utils";
import { editableUserCardBlock } from "#/recipes/blocks/editors";

const styles = editableUserCardBlock();

export interface EditableUserCardProps {
  class?: string;
}

export function EditableUserCard(props: EditableUserCardProps) {
  return (
    <Card class={cn(styles.root(), props.class)}>
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
                <Editable.Input
                  asChild={(p) => <Input {...p()} class={styles.root()} />}
                />
                <Editable.Preview />
              </Editable.Area>
              <Editable.Control>
                <Editable.CancelTrigger
                  asChild={(p) => (
                    <Button
                      {...p()}
                      aria-label="Cancel"
                      size="icon-md"
                      variant="outline"
                    >
                      <XIcon />
                    </Button>
                  )}
                />
                <Editable.SubmitTrigger
                  asChild={(p) => (
                    <Button
                      {...p()}
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
            <Editable defaultValue="@jane.doe">
              <Editable.Area>
                <Editable.Input asChild={(p) => <Input {...p()} />} />
                <Editable.Preview />
              </Editable.Area>
              <Editable.Control>
                <Editable.CancelTrigger
                  asChild={(p) => (
                    <Button
                      {...p()}
                      aria-label="Cancel"
                      size="icon-md"
                      variant="outline"
                    >
                      <XIcon />
                    </Button>
                  )}
                />
                <Editable.SubmitTrigger
                  asChild={(p) => (
                    <Button
                      {...p()}
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
