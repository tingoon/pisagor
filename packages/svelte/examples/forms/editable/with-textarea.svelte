<script lang="ts">
  import { Button, Card, Editable, Field, Textarea } from "@pisagor/svelte";
  import { CheckIcon, XIcon } from "phosphor-svelte";
</script>

<Card>
  <Card.Header>
    <Card.Title>Edit description</Card.Title>
    <Card.Description>Double-click the text to start editing</Card.Description>
  </Card.Header>
  <Card.Content>
    <Field.Group>
      <Field>
        <Field.Label>Description</Field.Label>
        <Editable.Root>
          <Editable.Area>
            <Editable.Input>
              {#snippet asChild(props)}
                <Textarea {...props()} class="min-h-24" />
              {/snippet}
            </Editable.Input>
            <Editable.Preview class="min-h-24" />
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
