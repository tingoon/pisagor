<script lang="ts">
import { Button, Card, Field } from "@pisagor/svelte";
import { Editable } from "@pisagor/svelte/editable";
import { CheckIcon, XIcon } from "@pisagor/svelte/icons";
</script>

<Card>
      <Card.Header
        description="Focus the field to start editing (default activation mode)"
        title="Edit with focus"
      />
      <Card.Content>
        <Field.Group>
          <Field>
            <Field.Label>Name</Field.Label>
            <Editable activationMode="focus" value="Jane Doe">
              <Editable.Area>
                <Editable.Input   />
                <Editable.Preview />
              </Editable.Area>
              <Editable.Control>
                <Editable.CancelTrigger>
            <Button
                      aria-label="Cancel"
                      size="icon-md"
                      variant="outline"
                    >
                      <XIcon />
                    </Button>
          </Editable.CancelTrigger>
                <Editable.SubmitTrigger>
            <Button
                      aria-label="Save"
                      size="icon-md"
                      variant="outline"
                    >
                      <CheckIcon />
                    </Button>
          </Editable.SubmitTrigger>
              </Editable.Control>
            </Editable>
          </Field>
          <Field>
            <Field.Label>Username</Field.Label>
            <Editable activationMode="focus" value="@jane.doe">
              <Editable.Area>
                <Editable.Input   />
                <Editable.Preview />
              </Editable.Area>
              <Editable.Control>
                <Editable.CancelTrigger>
            <Button
                      aria-label="Cancel"
                      size="icon-md"
                      variant="outline"
                    >
                      <XIcon />
                    </Button>
          </Editable.CancelTrigger>
                <Editable.SubmitTrigger>
            <Button
                      aria-label="Save"
                      size="icon-md"
                      variant="outline"
                    >
                      <CheckIcon />
                    </Button>
          </Editable.SubmitTrigger>
              </Editable.Control>
            </Editable>
          </Field>
        </Field.Group>
      </Card.Content>
    </Card>
