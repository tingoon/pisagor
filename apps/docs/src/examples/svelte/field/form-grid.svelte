<script lang="ts">
import { Field, Input } from "@pisagor/svelte";
import { formGridBlock } from "#/recipes/blocks/field";

const styles = formGridBlock();
</script>

<Field.Group class={styles.group()}>
  <Field>
    <Field.Label>First name</Field.Label>
    <Input placeholder="John" />
  </Field>
  <Field>
    <Field.Label>Last name</Field.Label>
    <Input placeholder="Doe" />
  </Field>
  <Field class={styles.span()}>
    <Field.Label>Address</Field.Label>
    <Input placeholder="123 Main St" />
  </Field>
</Field.Group>
