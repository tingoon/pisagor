/** @jsxImportSource solid-js */

import { labelAccessoryBlock } from "@pisagor/recipes/blocks/field";
import { Badge, Field, Input } from "@pisagor/solid";

const styles = labelAccessoryBlock();

export function LabelAccessory() {
  return (
    <Field>
      <Field.Label class={styles.label()}>
        Webhook URL
        <Badge class={styles.badge()} variant="info">
          Beta
        </Badge>
      </Field.Label>
      <Input placeholder="https://example.com/webhook" />
    </Field>
  );
}
