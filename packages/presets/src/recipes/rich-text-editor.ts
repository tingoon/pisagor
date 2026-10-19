import { tv, type VariantProps } from "tailwind-variants";
import {
  formControlFillCompounds,
  formControlShellBase,
  formControlSurfaceVariantOptions,
} from "./form-control";

export const richTextEditorRecipe = tv({
  compoundVariants: formControlFillCompounds({ slot: "base" }),
  defaultVariants: {
    /** Surface variant. */
    surfaceVariant: undefined,
    /** Visual emphasis. */
    variant: "primary",
  },
  slots: {
    base: [
      ...formControlShellBase,
      "m-0 min-w-0 border-solid p-0",
      "flex h-auto min-h-32 flex-col gap-0 overflow-hidden p-0",
      "focus-within:border-primary focus-within:ring-0.75 focus-within:ring-ring/32",
      "data-disabled:pointer-events-none data-disabled:opacity-64",
    ],
    content: [
      "min-h-24 flex-1 px-3 py-2",
      "text-base md:text-sm",
      "[&_.tiptap]:outline-hidden",
      "[&_.tiptap_p]:my-0",
      "[&_.tiptap_ul]:my-2 [&_.tiptap_ul]:list-disc [&_.tiptap_ul]:ps-5",
      "[&_.tiptap_ol]:my-2 [&_.tiptap_ol]:list-decimal [&_.tiptap_ol]:ps-5",
    ],
    inline: ["flex flex-wrap items-center gap-0.5"],
    toolbar: [
      "border-border bg-muted/30 flex flex-wrap items-center gap-1 border-b px-2 py-1.5",
    ],
  },
  variants: {
    surfaceVariant: formControlSurfaceVariantOptions,
    variant: {
      primary: {},
      secondary: {},
    },
  },
});

export type RichTextEditorRecipeFn = typeof richTextEditorRecipe;
export type RichTextEditorRecipe = ReturnType<RichTextEditorRecipeFn>;
export type RichTextEditorRecipeSlot = keyof RichTextEditorRecipe;
export type RichTextEditorVariantProps = VariantProps<RichTextEditorRecipeFn>;
