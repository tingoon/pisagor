<script lang="ts" setup>
import { PhCheck, PhX } from "@phosphor-icons/vue";
import { editableRecipe } from "@pisagor/recipes";
import { Button, Editable, Input } from "@pisagor/vue";
import { tv } from "tailwind-variants";

const brandEditableRecipe = tv({
  extend: editableRecipe,
  slots: { preview: "text-emerald-700 dark:text-emerald-300" },
  variants: {},
});
</script>

<template>
  <Editable :recipe="brandEditableRecipe">
    <Editable.Area>
      <Editable.Input as-child>
        <Input />
      </Editable.Input>
      <Editable.Preview />
    </Editable.Area>
    <Editable.Control>
      <Editable.CancelTrigger as-child>
        <Button aria-label="Cancel" size="icon-md" variant="outline">
          <PhX />
        </Button>
      </Editable.CancelTrigger>
      <Editable.SubmitTrigger as-child>
        <Button aria-label="Save" size="icon-md" variant="outline">
          <PhCheck />
        </Button>
      </Editable.SubmitTrigger>
    </Editable.Control>
  </Editable>
</template>
