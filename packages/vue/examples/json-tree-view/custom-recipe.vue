<script lang="ts" setup>
import { jsonTreeViewRecipe } from "@pisagor/recipes";
import { JsonTreeView } from "@pisagor/vue";
import { tv } from "tailwind-variants";
import { defaultData } from "./helpers";

const brandJsonTreeViewRecipe = tv({
  extend: jsonTreeViewRecipe,
  slots: {
    tree: "**:data-[kind=key]:text-emerald-700 dark:**:data-[kind=key]:text-emerald-300",
  },
  variants: {},
});
</script>

<template>
  <JsonTreeView
    :data="defaultData()"
    :default-expanded-depth="1"
    :recipe="brandJsonTreeViewRecipe"
  />
</template>
