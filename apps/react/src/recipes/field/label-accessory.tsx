import { Badge, Field, Input } from "@pisagor/react";

export function LabelAccessory() {
  return (
    <Field>
      <Field.Label className="flex items-center gap-2">
        Webhook URL
        <Badge className="ml-auto" variant="info">
          Beta
        </Badge>
      </Field.Label>
      <Input placeholder="https://example.com/webhook" />
    </Field>
  );
}
