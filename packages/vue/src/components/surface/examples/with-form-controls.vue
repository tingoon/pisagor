<script lang="ts" setup >
import { Checkbox, Field, Input, Select, Switch, Textarea } from "@pisagor/vue";
import { defineComponent } from "vue";
import { Surface } from "..";

const FormControlsDemo = defineComponent({
  components: { Checkbox, Field, Input, Select, Switch, Textarea },
  name: "FormControlsDemo",
  template: `
    <Field.Group class="max-w-md">
      <Field>
        <Field.Label>Email</Field.Label>
        <Input clearable placeholder="you@example.com" />
      </Field>

      <Field>
        <Field.Label>Notes</Field.Label>
        <Textarea placeholder="Add context…" :rows="3" />
      </Field>

      <Field>
        <Field.Label>Team</Field.Label>
        <Select :items="['Design', 'Engineering', 'Marketing']" placeholder="Choose a team" />
      </Field>

      <Field orientation="horizontal">
        <Switch />
        <Field.Content>
          <Field.Label>Email notifications</Field.Label>
        </Field.Content>
      </Field>

      <Field orientation="horizontal">
        <Checkbox />
        <Field.Content>
          <Field.Label>Accept terms</Field.Label>
        </Field.Content>
      </Field>
    </Field.Group>
  `,
});
</script>

<template>
        <Surface bordered padding="md" variant="default">
          <div class="mb-4">
            <h3 class="font-semibold text-sm">Settings</h3>
            <p class="text-muted-foreground text-sm">Grouped controls on a surface background.</p>
          </div>
          <FormControlsDemo />
        </Surface>
  
</template>
