<script lang="ts">
import { Card, Field } from "@pisagor/svelte";
import { Editable } from "@pisagor/svelte/editable";
</script>

<Card>
      <Card.Header
        description="Click the field to edit, press Enter to save, Escape to cancel"
        title="Edit without controls"
      />
      <Card.Content>
        <Field.Group>
          <Field>
            <Field.Label>Name</Field.Label>
            <Editable value="Jane Doe">
              <Editable.Area>
                <Editable.Input   />
                <Editable.Preview />
              </Editable.Area>
            </Editable>
          </Field>
          <Field>
            <Field.Label>Email</Field.Label>
            <Editable value="jane.doe@example.com">
              <Editable.Area>
                <Editable.Input   />
                <Editable.Preview />
              </Editable.Area>
            </Editable>
          </Field>
        </Field.Group>
      </Card.Content>
    </Card>
