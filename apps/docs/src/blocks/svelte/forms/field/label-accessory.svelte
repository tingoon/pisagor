<script lang="ts">
  import { Badge, Field, Input } from "@pisagor/svelte";
  import { labelAccessoryBlock } from "#/styles/recipes/field";

  const styles = labelAccessoryBlock();
</script>

<Field>
  <Field.Label class={styles.label()}>
    Webhook URL
    <Badge class={styles.badge()} variant="info">Beta</Badge>
  </Field.Label>
  <Input placeholder="https://example.com/webhook" />
</Field>
