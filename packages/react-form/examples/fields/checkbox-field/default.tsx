import { CheckboxField } from "@pisagor/react-form";

export function Default() {
  return (
    <CheckboxField
      description="We'll send product news about once a month."
      id="checkbox-field-newsletter"
      label="Subscribe to the newsletter"
    />
  );
}
