<script lang="ts" setup>
import { PhMinus, PhPlus } from "@phosphor-icons/vue";
import { buttonGroupRecipe } from "@pisagor/recipes";
import { Button, ButtonGroup } from "@pisagor/vue";
import { tv } from "tailwind-variants";

const brandButtonGroupRecipe = tv({
  extend: buttonGroupRecipe,
  slots: { separator: "bg-emerald-500/60" },
  variants: {},
});
</script>

<template>
  <ButtonGroup :recipe="brandButtonGroupRecipe">
    <Button aria-label="Remove" size="icon-md" variant="secondary">
      <PhMinus />
    </Button>
    <ButtonGroup.Separator />
    <Button aria-label="Add" size="icon-md" variant="secondary">
      <PhPlus />
    </Button>
  </ButtonGroup>
</template>
