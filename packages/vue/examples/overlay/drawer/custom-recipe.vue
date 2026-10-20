<script lang="ts" setup>
import { drawerRecipe } from "@pisagor/recipes";
import { Button, Drawer, Field, Input } from "@pisagor/vue";
import { tv } from "tailwind-variants";

const brandDrawerRecipe = tv({
  extend: drawerRecipe,
  slots: {
    backdrop: "bg-emerald-950/30",
    grabber: "bg-emerald-500/50",
    title: "text-emerald-900 dark:text-emerald-100",
  },
  variants: {},
});
</script>

<template>
  <Drawer
    :recipe="brandDrawerRecipe"
    description="Make changes to your account here. Swipe down to close."
    title="Edit profile"
  >
    <template #trigger>
      <Button variant="outline">Open</Button>
    </template>
    <Field.Group>
      <Field>
        <Field.Label>Name</Field.Label>
        <Input default-value="Jane Doe" />
      </Field>
      <Field>
        <Field.Label>Username</Field.Label>
        <Input default-value="@jane.doe" />
      </Field>
    </Field.Group>
    <template #actions>
      <Drawer.CloseTrigger as-child>
        <Button variant="outline">Cancel</Button>
      </Drawer.CloseTrigger>
      <Drawer.CloseTrigger as-child>
        <Button>Save changes</Button>
      </Drawer.CloseTrigger>
    </template>
  </Drawer>
</template>
