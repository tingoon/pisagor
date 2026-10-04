<script lang="ts">
import { Field, Frame, Input, Switch } from "@pisagor/svelte";
</script>

<Frame>
  <Frame.Header>
    <Frame.Title>Account</Frame.Title>
    <Frame.Description>
      Controls on muted Frame chrome and raised panels.
    </Frame.Description>
  </Frame.Header>
  <Frame.Panel>
    <Field.Group>
      <Field>
        <Field.Label for="frame-email">Email</Field.Label>
        <Input clearable id="frame-email" placeholder="you@example.com" />
      </Field>
      <Field orientation="horizontal">
        <Switch id="frame-notify" />
        <Field.Content>
          <Field.Label for="frame-notify"> Email notifications </Field.Label>
        </Field.Content>
      </Field>
    </Field.Group>
  </Frame.Panel>
</Frame>
