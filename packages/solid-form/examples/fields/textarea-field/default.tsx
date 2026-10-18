import { TextareaField } from "@pisagor/solid-form";

export function Default() {
  return (
    <TextareaField
      description="Optional. Mention anything the delivery driver should know."
      id="textarea-field-delivery-notes"
      label="Delivery notes"
      placeholder="e.g. Leave at the front desk"
    />
  );
}
