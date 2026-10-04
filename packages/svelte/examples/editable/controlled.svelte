<script lang="ts">
import { Button, Card, Editable, Field } from "@pisagor/svelte";
import { CheckIcon, PencilSimpleIcon } from "@pisagor/svelte/icons";

let isEditing = $state(false);
</script>

<Card>
  <Card.Header
    description="Click the edit button to start editing"
    title="Edit user"
  >
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
        <Editable
          activationMode="none"
          defaultValue="Jane Doe"
          edit={isEditing}
        >
          <Editable.Area>
            <Editable.Input />
            <Editable.Preview />
          </Editable.Area>
        </Editable>
      </Field>
      <Field>
        <Field.Label>Username</Field.Label>
        <Editable
          activationMode="none"
          defaultValue="@jane.doe"
          edit={isEditing}
        >
          <Editable.Area>
            <Editable.Input />
            <Editable.Preview />
          </Editable.Area>
        </Editable>
      </Field>
    </Field.Group>
  </Card.Content>
</Card>
