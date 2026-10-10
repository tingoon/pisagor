import { CheckboxField } from "@pisagor/solid-form";

export function Default() {
  return (
    <CheckboxField
      description="We'll send product news about once a month."
      id="checkbox-field-newsletter"
      label="Subscribe to the newsletter"
    />
  );
}
