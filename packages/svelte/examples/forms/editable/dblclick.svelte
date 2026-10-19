<script lang="ts">
  import { Button, Card, Editable, Field } from "@pisagor/svelte";
  import { CheckIcon, XIcon } from "phosphor-svelte";
</script>

<Card>
  <Card.Header>
    <Card.Title>Edit with double-click</Card.Title>
    <Card.Description>Double-click the text to start editing</Card.Description>
  </Card.Header>
  <Card.Content>
    <Field.Group>
      <Field>
        <Field.Label>Name</Field.Label>
        <Editable.Root activationMode="dblclick" value="Jane Doe">
          <Editable.Area>
            <Editable.Input />
            <Editable.Preview />
          </Editable.Area>
          <Editable.Control>
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
        <Editable.Root activationMode="dblclick" value="@jane.doe">
          <Editable.Area>
            <Editable.Input />
            <Editable.Preview />
          </Editable.Area>
          <Editable.Control>
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
