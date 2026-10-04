<script lang="ts">
import { Button, Card, Editable, Field } from "@pisagor/svelte";
import { CheckIcon, PencilSimpleIcon, XIcon } from "@pisagor/svelte/icons";
</script>

<Card>
  <Card.Header
    description="Use the edit button to start editing (no automatic activation)"
    title="Edit with manual trigger"
  />
  <Card.Content>
    <Field.Group>
      <Field>
        <Field.Label>Name</Field.Label>
        <Editable activationMode="none" value="Jane Doe">
          <Editable.Area>
            <Editable.Input />
            <Editable.Preview />
          </Editable.Area>
          <Editable.Control>
            <Editable.EditTrigger>
              <Button aria-label="Edit" size="icon-md" variant="outline">
                <PencilSimpleIcon />
              </Button>
            </Editable.EditTrigger>
            <Editable.CancelTrigger>
              <Button aria-label="Cancel" size="icon-md" variant="outline">
                <XIcon />
              </Button>
            </Editable.CancelTrigger>
            <Editable.SubmitTrigger>
              <Button aria-label="Save" size="icon-md" variant="outline">
                <CheckIcon />
              </Button>
            </Editable.SubmitTrigger>
          </Editable.Control>
        </Editable>
      </Field>
      <Field>
        <Field.Label>Username</Field.Label>
        <Editable activationMode="none" value="@jane.doe">
          <Editable.Area>
            <Editable.Input />
            <Editable.Preview />
          </Editable.Area>
          <Editable.Control>
            <Editable.EditTrigger>
              <Button aria-label="Edit" size="icon-md" variant="outline">
                <PencilSimpleIcon />
              </Button>
            </Editable.EditTrigger>
            <Editable.CancelTrigger>
              <Button aria-label="Cancel" size="icon-md" variant="outline">
                <XIcon />
              </Button>
            </Editable.CancelTrigger>
            <Editable.SubmitTrigger>
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
