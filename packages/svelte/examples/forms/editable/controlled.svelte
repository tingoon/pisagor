<script lang="ts">
  import { Button, Card, Editable, Field } from "@pisagor/svelte";
  import { CheckIcon, PencilSimpleIcon } from "phosphor-svelte";

  let isEditing = $state(false);
</script>

<Card>
  <Card.Header>
    <Card.Title>Edit user</Card.Title>
    <Card.Description>Click the edit button to start editing</Card.Description>
    <Card.Action>
      <Button
        onclick={() => (isEditing = !isEditing)}
        variant={isEditing ? "outline" : "ghost"}
      >
        {#if isEditing}
          <CheckIcon />
          Save
        {:else}
          <PencilSimpleIcon />
          Edit
        {/if}
      </Button>
    </Card.Action>
  </Card.Header>
  <Card.Content>
    <Field.Group>
      <Field>
        <Field.Label>Name</Field.Label>
        <Editable.Root
          activationMode="none"
          defaultValue="Jane Doe"
          edit={isEditing}
        >
          <Editable.Area>
            <Editable.Input />
            <Editable.Preview />
          </Editable.Area>
        </Editable.Root>
      </Field>
      <Field>
        <Field.Label>Username</Field.Label>
        <Editable.Root
          activationMode="none"
          defaultValue="@jane.doe"
          edit={isEditing}
        >
          <Editable.Area>
            <Editable.Input />
            <Editable.Preview />
          </Editable.Area>
        </Editable.Root>
      </Field>
    </Field.Group>
  </Card.Content>
</Card>
