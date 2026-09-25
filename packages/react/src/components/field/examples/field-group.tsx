import { Checkbox } from "@pisagor/react";
import { Field } from "..";
export function FieldGroup() {
  return (
    <Field.Group>
      <Field.Set>
        <Field.Legend variant="label">Newsletter</Field.Legend>
        <Field.Description>
          Choose how you want to receive updates about new features and product
          releases.
        </Field.Description>
        <Field orientation="horizontal">
          <Checkbox defaultChecked disabled value="weekly" />
          <Field.Label>Weekly digest</Field.Label>
        </Field>
      </Field.Set>
      <Field.Separator />
      <Field.Set>
        <Field.Legend variant="label">Updates</Field.Legend>
        <Field.Description>
          Get notified about important account activity.{" "}
          <a href="https://example.com/view-activity-log">View activity log</a>
        </Field.Description>
        <Checkbox.Group>
          <Field orientation="horizontal">
            <Checkbox value="security" />
            <Field.Label>Security alerts</Field.Label>
          </Field>
          <Field orientation="horizontal">
            <Checkbox value="billing" />
            <Field.Label>Billing reminders</Field.Label>
          </Field>
        </Checkbox.Group>
      </Field.Set>
    </Field.Group>
  );
}
