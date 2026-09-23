<script lang="ts" setup >
import { Field, Input, Switch } from "@pisagor/vue";
import { Frame } from "..";
</script>

<template>
  <Frame>
          <Frame.Header>
            <Frame.Title>Account</Frame.Title>
            <Frame.Description>Controls on muted Frame chrome and raised panels.</Frame.Description>
          </Frame.Header>
          <Frame.Panel>
            <Field.Group>
              <Field>
                <Field.Label>Email</Field.Label>
                <Input clearable placeholder="you@example.com" />
              </Field>
              <Field orientation="horizontal">
                <Switch />
                <Field.Content>
                  <Field.Label>Email notifications</Field.Label>
                </Field.Content>
              </Field>
            </Field.Group>
          </Frame.Panel>
        </Frame>
</template>
