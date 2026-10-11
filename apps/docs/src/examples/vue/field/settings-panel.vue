<script lang="ts" setup>
import { Checkbox, Field, Surface } from "@pisagor/vue";
import { settingsPanelBlock } from "#/recipes/blocks/field";

const styles = settingsPanelBlock();
</script>

<template>
  <Surface
    bordered
    padding="sm"
    rounded
    variant="secondary"
    :class="styles.root()"
  >
    <Field.Group>
      <Field orientation="horizontal">
        <Checkbox default-checked />
        <Field.Label>Accept terms and conditions</Field.Label>
      </Field>
      <Field orientation="horizontal">
        <Checkbox />
        <Field.Content>
          <Field.Label>Receive notifications</Field.Label>
          <Field.Description>
            You'll receive a notification when someone posts a comment
          </Field.Description>
        </Field.Content>
      </Field>
      <Field orientation="horizontal">
        <Checkbox />
        <Field.Content>
          <Field.Label>Receive marketing emails</Field.Label>
        </Field.Content>
      </Field>
    </Field.Group>
  </Surface>
</template>
