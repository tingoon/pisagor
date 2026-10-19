<script lang="ts">
  import { Button, Card, Editable, Field } from "@pisagor/svelte";
  import { cn } from "@pisagor/utils";
  import { CheckIcon, XIcon } from "phosphor-svelte";
  import { editableUserCardBlock } from "#/styles/recipes/editors";

  const styles = editableUserCardBlock();

  interface Props {
    class?: string;
  }
  let { class: className }: Props = $props();
</script>

<Card class={cn(styles.root(), className)}>
  <Card.Header>
    <Card.Title>Edit user</Card.Title>
    <Card.Description
      >Click in the field or edit button to start editing</Card.Description
    >
  </Card.Header>
  <Card.Content>
    <Field.Group>
      <Field>
        <Field.Label>Name</Field.Label>
        <Editable.Root value="Jane Doe">
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
        <Editable.Root value="@jane.doe">
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
