<script lang="ts" setup>
import { drawerRecipe } from "@pisagor/recipes";
import { Button, Drawer, Field, Input } from "@pisagor/vue";
import { tv } from "tailwind-variants";

const brandDrawerRecipe = tv({
  extend: drawerRecipe,
  slots: {
    backdrop: "bg-emerald-950/30",
    grabberIcon: "bg-emerald-500/50",
    title: "text-emerald-900 dark:text-emerald-100",
  },
  variants: {},
});
</script>

<template>
  <Drawer :recipe="brandDrawerRecipe">
    <Drawer.Trigger as-child>
      <Button variant="outline">Open</Button>
    </Drawer.Trigger>
    <Drawer.Content>
      <Drawer.ContentInner>
        <Drawer.Header
          description="Make changes to your account here. Swipe down to close."
          title="Edit profile"
        />
        <Drawer.Body>
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
        </Drawer.Body>
      </Drawer.ContentInner>
      <Drawer.Footer>
        <Drawer.ContentInner>
          <Drawer.CloseTrigger as-child>
            <Button variant="outline">Cancel</Button>
          </Drawer.CloseTrigger>
          <Drawer.CloseTrigger as-child>
            <Button>Save changes</Button>
          </Drawer.CloseTrigger>
        </Drawer.ContentInner>
      </Drawer.Footer>
    </Drawer.Content>
  </Drawer>
</template>
