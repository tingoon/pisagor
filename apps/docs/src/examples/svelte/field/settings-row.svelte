<script lang="ts">
import { Checkbox, Field, Surface } from "@pisagor/svelte";
import { settingsRowBlock } from "#/recipes/blocks/field";

const styles = settingsRowBlock();
</script>

<Surface
  bordered
  class={styles.root()}
  padding="md"
  rounded
  variant="secondary"
>
  <Field.Label>
    <Field orientation="horizontal">
      <Checkbox />
      <Field.Content>
        <Field.Title>Enable notifications</Field.Title>
        <Field.Description>
          You can enable or disable notifications at any time.
        </Field.Description>
      </Field.Content>
    </Field>
  </Field.Label>
</Surface>
