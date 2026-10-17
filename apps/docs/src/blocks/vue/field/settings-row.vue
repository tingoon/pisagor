<script lang="ts" setup>
import { Checkbox, Field, Surface } from "@pisagor/vue";
import { settingsRowBlock } from "#/styles/recipes/field";

const styles = settingsRowBlock();
</script>

<template>
  <Surface
    bordered
    padding="md"
    rounded
    variant="secondary"
    :class="styles.root()"
  >
    <Field orientation="horizontal">
      <Checkbox />
      <Field.Content>
        <Field.Title>Enable notifications</Field.Title>
        <Field.Description>
          You can enable or disable notifications at any time.
        </Field.Description>
      </Field.Content>
    </Field>
  </Surface>
</template>
