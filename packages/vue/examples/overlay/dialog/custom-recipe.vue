<script lang="ts" setup>
import { dialogRecipe } from "@pisagor/recipes";
import { Button, Dialog, Field, Input, Select } from "@pisagor/vue";
import { tv } from "tailwind-variants";

const branches = ["main", "develop", "feature/123", "release/1.0.0"];

const brandDialogRecipe = tv({
  extend: dialogRecipe,
  slots: {
    backdrop: "bg-emerald-950/30",
    content: "border-emerald-500/40",
    title: "text-emerald-900 dark:text-emerald-100",
  },
  variants: {},
});
</script>

<template>
  <Dialog
    :recipe="brandDialogRecipe"
    description="Make changes to your project settings."
    title="Edit project"
  >
    <template #trigger>
      <Button variant="outline">Open</Button>
    </template>
    <Field.Set>
      <Field.Group>
        <Field>
          <Field.Label>Name</Field.Label>
          <Input placeholder="Your project" />
        </Field>
        <Field>
          <Field.Label>Main branch</Field.Label>
          <Select :items="branches" placeholder="Select branch" />
        </Field>
      </Field.Group>
    </Field.Set>
    <template #actions>
      <Dialog.CloseTrigger as-child>
        <Button variant="outline">Cancel</Button>
      </Dialog.CloseTrigger>
      <Dialog.CloseTrigger as-child>
        <Button>Save</Button>
      </Dialog.CloseTrigger>
    </template>
  </Dialog>
</template>
