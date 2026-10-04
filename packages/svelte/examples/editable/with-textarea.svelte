<script lang="ts">
import { Button } from "@pisagor/svelte/button";
import { Card } from "@pisagor/svelte/card";
import { Editable } from "@pisagor/svelte/editable";
import { Field } from "@pisagor/svelte/field";
import { CheckIcon, XIcon } from "@pisagor/svelte/icons";
import { Textarea } from "@pisagor/svelte/textarea";
</script>

<Card>
  <Card.Header description="Double-click the text to start editing" title="Edit description" />
  <Card.Content>
    <Field.Group>
      <Field>
        <Field.Label>Description</Field.Label>
        <Editable>
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
              <Button aria-label="Cancel" size="icon-md" variant="outline"><XIcon /></Button>
            </Editable.CancelTrigger>
            <Editable.SubmitTrigger>
              <Button aria-label="Save" size="icon-md" variant="outline"><CheckIcon /></Button>
            </Editable.SubmitTrigger>
          </Editable.Control>
        </Editable>
      </Field>
    </Field.Group>
  </Card.Content>
</Card>
