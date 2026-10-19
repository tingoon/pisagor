<script lang="ts">
  import { Card, Editable, Field } from "@pisagor/svelte";
</script>

<Card>
  <Card.Header>
    <Card.Title>Edit without controls</Card.Title>
    <Card.Description
      >Click the field to edit, press Enter to save, Escape to cancel</Card.Description
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
        </Editable.Root>
      </Field>
      <Field>
        <Field.Label>Email</Field.Label>
        <Editable.Root value="jane.doe@example.com">
          <Editable.Area>
            <Editable.Input />
            <Editable.Preview />
          </Editable.Area>
        </Editable.Root>
      </Field>
    </Field.Group>
  </Card.Content>
</Card>
