<script lang="ts">
import { editableUserCardBlock } from "@pisagor/recipes/blocks/editors";
import { Button, Card, Editable, Field } from "@pisagor/svelte";
import { cn } from "@pisagor/utils";
import CheckIcon from "phosphor-svelte/lib/CheckIcon";
import XIcon from "phosphor-svelte/lib/XIcon";

const styles = editableUserCardBlock();

interface Props {
  class?: string;
}
let { class: className }: Props = $props();
</script>

<Card class={cn(styles.root(), className)}>
  <Card.Header
    description="Click in the field or edit button to start editing"
    title="Edit user"
  />
  <Card.Content>
    <Field.Group>
      <Field>
        <Field.Label>Name</Field.Label>
        <Editable value="Jane Doe">
          <Editable.Area>
            <Editable.Input />
            <Editable.Preview />
          </Editable.Area>
          <Editable.Control>
            <Editable.CancelTrigger>
              <Button aria-label="Cancel" size="icon-md" variant="outline"
                ><XIcon /></Button
              >
            </Editable.CancelTrigger>
            <Editable.SubmitTrigger>
              <Button aria-label="Save" size="icon-md" variant="outline"
                ><CheckIcon /></Button
              >
            </Editable.SubmitTrigger>
          </Editable.Control>
        </Editable>
      </Field>
      <Field>
        <Field.Label>Username</Field.Label>
        <Editable value="@jane.doe">
          <Editable.Area>
            <Editable.Input />
            <Editable.Preview />
          </Editable.Area>
          <Editable.Control>
            <Editable.CancelTrigger>
              <Button aria-label="Cancel" size="icon-md" variant="outline"
                ><XIcon /></Button
              >
            </Editable.CancelTrigger>
            <Editable.SubmitTrigger>
              <Button aria-label="Save" size="icon-md" variant="outline"
                ><CheckIcon /></Button
              >
            </Editable.SubmitTrigger>
          </Editable.Control>
        </Editable>
      </Field>
    </Field.Group>
  </Card.Content>
</Card>
