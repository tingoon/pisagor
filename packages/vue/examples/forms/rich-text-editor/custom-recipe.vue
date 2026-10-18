<script lang="ts" setup>
import { richTextEditorRecipe } from "@pisagor/recipes";
import { RichTextEditor } from "@pisagor/vue/rich-text-editor";
import { tv } from "tailwind-variants";

const brandRichTextEditorRecipe = tv({
  extend: richTextEditorRecipe,
  slots: {
    base: "focus-within:border-emerald-600",
    toolbar: "bg-emerald-500/5",
  },
  variants: {},
});
</script>

<template>
  <RichTextEditor
    default-value="<p>Start writing…</p>"
    :recipe="brandRichTextEditorRecipe"
  />
</template>
