<script lang="ts" setup>
import { toolbarRecipe } from "@pisagor/recipes";
import { Button, Toolbar } from "@pisagor/vue";
import { tv } from "tailwind-variants";

const brandToolbarRecipe = tv({
  extend: toolbarRecipe,
  slots: {
    base: "border-emerald-500/30",
    title: "text-emerald-900 dark:text-emerald-100",
  },
  variants: {},
});
</script>

<template>
  <Toolbar.Root :recipe="brandToolbarRecipe">
    <Toolbar.Heading>
      <Toolbar.Title>Projects</Toolbar.Title>
      <Toolbar.Description>
        Manage deployments and monitor activity.
      </Toolbar.Description>
    </Toolbar.Heading>
    <Toolbar.Actions>
      <Button variant="outline">Import</Button>
      <Button>New project</Button>
    </Toolbar.Actions>
  </Toolbar.Root>
</template>
