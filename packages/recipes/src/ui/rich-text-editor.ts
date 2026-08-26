import { tv, type VariantProps } from "tailwind-variants";

export const richTextEditorVariants = tv({
  slots: {
    base: [
      "flex h-auto min-h-32 flex-col gap-0 overflow-hidden p-0",
      "focus-within:border-primary focus-within:ring-[3px] focus-within:ring-ring/32",
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
    toolbar: ["flex flex-wrap items-center gap-1 border-border border-b bg-muted/30 px-2 py-1.5"],
  },
});

export type RichTextEditorVariantProps = VariantProps<typeof richTextEditorVariants>;
export type RichTextEditorVariants = ReturnType<typeof richTextEditorVariants>;
export type RichTextEditorSlots = keyof RichTextEditorVariants;
