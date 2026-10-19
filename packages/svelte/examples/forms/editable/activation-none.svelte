<script lang="ts">
  import { Button, Card, Editable, Field } from "@pisagor/svelte";
  import { CheckIcon, PencilSimpleIcon, XIcon } from "phosphor-svelte";
</script>

<Card>
  <Card.Header>
    <Card.Title>Edit with manual trigger</Card.Title>
    <Card.Description
      >Use the edit button to start editing (no automatic activation)</Card.Description
    >
  </Card.Header>
  <Card.Content>
    <Field.Group>
      <Field>
        <Field.Label>Name</Field.Label>
        <Editable.Root activationMode="none" value="Jane Doe">
          <Editable.Area>
            <Editable.Input />
            <Editable.Preview />
          </Editable.Area>
          <Editable.Control>
            <Editable.EditTrigger>
              {#snippet asChild(props)}
                <Button
                  {...props()}
                  aria-label="Edit"
                  size="icon-md"
                  variant="outline"
                >
                  <PencilSimpleIcon />
                </Button>
              {/snippet}
            </Editable.EditTrigger>
            <Editable.CancelTrigger>
              {#snippet asChild(props)}
                <Button
                  {...props()}
                  aria-label="Cancel"
                  size="icon-md"
                  variant="outline"
                >
                  <XIcon />
                </Button>
              {/snippet}
            </Editable.CancelTrigger>
            <Editable.SubmitTrigger>
              {#snippet asChild(props)}
                <Button
                  {...props()}
                  aria-label="Save"
                  size="icon-md"
                  variant="outline"
                >
                  <CheckIcon />
                </Button>
              {/snippet}
            </Editable.SubmitTrigger>
          </Editable.Control>
        </Editable.Root>
      </Field>
      <Field>
        <Field.Label>Username</Field.Label>
        <Editable.Root activationMode="none" value="@jane.doe">
          <Editable.Area>
            <Editable.Input />
            <Editable.Preview />
          </Editable.Area>
          <Editable.Control>
            <Editable.EditTrigger>
              {#snippet asChild(props)}
                <Button
                  {...props()}
                  aria-label="Edit"
                  size="icon-md"
                  variant="outline"
                >
                  <PencilSimpleIcon />
                </Button>
              {/snippet}
            </Editable.EditTrigger>
            <Editable.CancelTrigger>
              {#snippet asChild(props)}
                <Button
                  {...props()}
                  aria-label="Cancel"
                  size="icon-md"
                  variant="outline"
                >
                  <XIcon />
                </Button>
              {/snippet}
            </Editable.CancelTrigger>
            <Editable.SubmitTrigger>
              {#snippet asChild(props)}
                <Button
                  {...props()}
                  aria-label="Save"
                  size="icon-md"
                  variant="outline"
                >
                  <CheckIcon />
                </Button>
              {/snippet}
            </Editable.SubmitTrigger>
          </Editable.Control>
        </Editable.Root>
      </Field>
    </Field.Group>
  </Card.Content>
</Card>
