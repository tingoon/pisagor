<script lang="ts">
import { settingsPanelBlock } from "@pisagor/recipes/blocks/field";
import { Checkbox, Field, Surface } from "@pisagor/svelte";

const styles = settingsPanelBlock();
</script>

<Surface
  bordered
  class={styles.root()}
  padding="sm"
  rounded
  variant="secondary"
>
  <Field.Group>
    <Field orientation="horizontal">
      <Checkbox checked />
      <Field.Label>Accept terms and conditions</Field.Label>
    </Field>
    <Field orientation="horizontal">
      <Checkbox />
      <Field.Content>
        <Field.Label>Receive notifications</Field.Label>
        <Field.Description>
          You'll receive a notification when someone posts a comment
        </Field.Description>
      </Field.Content>
    </Field>
    <Field orientation="horizontal">
      <Checkbox />
      <Field.Content>
        <Field.Label>Receive marketing emails</Field.Label>
      </Field.Content>
    </Field>
  </Field.Group>
</Surface>
