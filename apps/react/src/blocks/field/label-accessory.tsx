import { Badge, Field, Input } from "@pisagor/react";
import { labelAccessoryBlock } from "@pisagor/recipes/blocks/field";

const styles = labelAccessoryBlock();

export function LabelAccessory() {
  return (
    <Field>
      <Field.Label className={styles.label()}>
        Webhook URL
        <Badge className={styles.badge()} variant="info">
          Beta
        </Badge>
      </Field.Label>
      <Input placeholder="https://example.com/webhook" />
    </Field>
  );
}
