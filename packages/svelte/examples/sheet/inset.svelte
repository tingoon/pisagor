<script lang="ts">
import { Button, Field, Input, Sheet } from "@pisagor/svelte";
</script>

<Sheet>
  <Sheet.Trigger>
    <Button variant="outline">Open</Button>
  </Sheet.Trigger>
  <Sheet.Content variant="inset">
    <Sheet.Header>
      <Sheet.Title>Inset sheet</Sheet.Title>
      <Sheet.Description>This sheet uses the inset variant with rounded corners and padding.</Sheet.Description>
    </Sheet.Header>
    <Sheet.Body>
      <Field.Group>
        <Field>
          <Field.Label>Name</Field.Label>
          <Input value="Jane Doe" />
        </Field>
        <Field>
          <Field.Label>Email</Field.Label>
          <Input value="you@example.com" />
        </Field>
      </Field.Group>
    </Sheet.Body>
    <Sheet.Footer>
      <Sheet.CloseTrigger>
        <Button variant="outline">Cancel</Button>
      </Sheet.CloseTrigger>
      <Sheet.CloseTrigger>
        <Button>Save changes</Button>
      </Sheet.CloseTrigger>
    </Sheet.Footer>
  </Sheet.Content>
</Sheet>
