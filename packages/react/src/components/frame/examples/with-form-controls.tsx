import { Field, Input, Switch } from "@pisagor/react";
import { Frame } from "..";

export function WithFormControls() {
  return (
    <Frame>
      <Frame.Header>
        <Frame.Title>Account</Frame.Title>
        <Frame.Description>Controls on muted Frame chrome and raised panels.</Frame.Description>
      </Frame.Header>
      <Frame.Panel>
        <Field.Group>
          <Field>
            <Field.Label htmlFor="frame-email">Email</Field.Label>
            <Input clearable id="frame-email" placeholder="you@example.com" />
          </Field>
          <Field orientation="horizontal">
            <Switch id="frame-notify" />
            <Field.Content>
              <Field.Label htmlFor="frame-notify">Email notifications</Field.Label>
            </Field.Content>
          </Field>
        </Field.Group>
      </Frame.Panel>
    </Frame>
  );
}
