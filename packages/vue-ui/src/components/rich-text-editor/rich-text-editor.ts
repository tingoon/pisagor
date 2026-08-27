import { ark } from "@ark-ui/vue/factory";
import {
  PhListBullets,
  PhListNumbers,
  PhTextB,
  PhTextItalic,
  PhTextStrikethrough,
} from "@phosphor-icons/vue";
import {
  type RichTextEditorVariants,
  richTextEditorVariants,
} from "@pisagor/recipes/rich-text-editor";
import { cn } from "@pisagor/utils";
import StarterKit from "@tiptap/starter-kit";
import { type Editor, EditorContent, useEditor } from "@tiptap/vue-3";
import { defineComponent, h, type PropType, shallowReactive, watch, watchEffect } from "vue";
import type { FormControlVariant } from "../../internal/form-control/form-control-variants";
import {
  formControlShellProps,
  formControlShellVariants,
  shellVariantArgs,
} from "../../internal/form-control/form-control-variants";
import { useFormControlVariant } from "../../internal/form-control/use-form-control-variant";
import { createContext } from "../../utils/create-context";
import { Toggle } from "../toggle/toggle";
import { VisuallyHidden } from "../visually-hidden/visually-hidden";

type ArkPart = Parameters<typeof h>[0];

// #region Types
interface RichTextEditorContextValue {
  editor: Editor | null;
  slots: RichTextEditorVariants;
}

export interface RichTextEditorRootProps {
  "aria-label"?: string;
  class?: unknown;
  /** Initial HTML content for uncontrolled usage. */
  defaultValue?: string;
  /** Whether the editor is disabled. */
  disabled?: boolean;
  id?: string;
  /** Marks the control as invalid for styling and assistive tech. */
  invalid?: boolean;
  /** Native form field name for a hidden input mirroring the HTML value. */
  name?: string;
  /** Called when the editor loses focus. */
  onBlur?: () => void;
  /** Called with HTML when the document changes. */
  onValueChange?: (value: string) => void;
  /** Whether the editor is read-only. */
  readOnly?: boolean;
  /** Controlled HTML content. */
  value?: string;
  /** Visual shell variant. When omitted, resolves from the nearest `Surface` context. */
  variant?: FormControlVariant;
}

export interface RichTextEditorToolbarProps {
  class?: unknown;
}

export interface RichTextEditorContentProps {
  class?: unknown;
}
// #endregion

// #region Context
const [provideRichTextEditorContext, useRichTextEditorContext] =
  createContext<RichTextEditorContextValue>({
    name: "RichTextEditor",
  });

/**
 * Access the TipTap editor instance from the nearest RichTextEditor root.
 */
export function useRichTextEditor() {
  return useRichTextEditorContext()?.editor ?? null;
}
// #endregion

const richTextEditorRootProps = {
  "aria-label": String,
  class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  defaultValue: { default: undefined, type: String },
  disabled: { default: false, type: Boolean },
  id: String,
  invalid: { default: false, type: Boolean },
  name: String,
  onBlur: { default: undefined, type: Function as PropType<RichTextEditorRootProps["onBlur"]> },
  onValueChange: {
    default: undefined,
    type: Function as PropType<RichTextEditorRootProps["onValueChange"]>,
  },
  readOnly: { default: false, type: Boolean },
  value: { default: undefined, type: String },
  variant: { default: undefined, type: String as PropType<FormControlVariant | undefined> },
};

// #region Parts
export const RichTextEditorRoot = defineComponent({
  inheritAttrs: false,
  name: "RichTextEditorRoot",
  props: richTextEditorRootProps,
  setup(props, { attrs, slots }) {
    const recipeSlots = richTextEditorVariants();

    const editor = useEditor({
      content: props.value ?? props.defaultValue ?? "<p></p>",
      editable: !(props.readOnly || props.disabled),
      editorProps: {
        attributes: {
          ...(props.id ? { id: props.id } : {}),
          "aria-invalid": props.invalid ? "true" : "false",
        },
      },
      extensions: [StarterKit],
      onBlur: () => {
        props.onBlur?.();
      },
      onUpdate: ({ editor: current }) => {
        props.onValueChange?.(current.getHTML());
      },
    });

    watch(
      () => props.value,
      (value) => {
        const current = editor.value;
        if (!current || value === undefined) {
          return;
        }

        const nextValue = value === "" ? "<p></p>" : value;
        const existing = current.getHTML();

        if (nextValue !== existing) {
          current.commands.setContent(nextValue, { emitUpdate: false });
        }
      },
    );

    watchEffect(() => {
      editor.value?.setEditable(!(props.readOnly || props.disabled));
    });

    watchEffect(() => {
      const current = editor.value;
      if (!current) {
        return;
      }

      current.setOptions({
        editorProps: {
          attributes: {
            ...(props.id ? { id: props.id } : {}),
            "aria-invalid": props.invalid ? "true" : "false",
          },
        },
      });
    });

    const contextValue = shallowReactive<RichTextEditorContextValue>({
      editor: null,
      slots: recipeSlots,
    });

    watchEffect(() => {
      contextValue.editor = editor.value ?? null;
    });

    provideRichTextEditorContext(contextValue);

    return () => {
      const resolved = useFormControlVariant(props.variant);
      const shellArgs = shellVariantArgs(resolved);
      const controlProps = formControlShellProps(resolved);
      const resolvedAriaLabel = props["aria-label"] ?? (props.id ? undefined : "Rich text editor");

      return h(
        ark.div as ArkPart,
        {
          ...attrs,
          ...controlProps,
          "aria-disabled": props.disabled || undefined,
          "aria-invalid": props.invalid || undefined,
          "aria-label": resolvedAriaLabel,
          "aria-readonly": props.readOnly || undefined,
          class: cn(
            formControlShellVariants({ ...shellArgs }),
            recipeSlots.base({ class: props.class }),
            props.disabled && "pointer-events-none opacity-64",
          ),
          "data-disabled": props.disabled ? "true" : undefined,
          "data-invalid": props.invalid ? "true" : undefined,
          "data-part": "root",
          "data-readonly": props.readOnly ? "true" : undefined,
          "data-scope": "rich-text-editor",
          role: "group",
        },
        () => [
          props.name
            ? h(VisuallyHidden as ArkPart, {}, () =>
                h("input", {
                  name: props.name,
                  readOnly: true,
                  tabIndex: -1,
                  type: "hidden",
                  value: props.value ?? editor.value?.getHTML() ?? props.defaultValue ?? "",
                }),
              )
            : null,
          slots.default?.(),
        ],
      );
    };
  },
});

export const RichTextEditorToolbar = defineComponent({
  inheritAttrs: false,
  name: "RichTextEditorToolbar",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    const context = useRichTextEditorContext();

    return () => {
      const editor = context?.editor;
      const recipeSlots = context?.slots;

      if (!editor || !recipeSlots) {
        return null;
      }

      const activeMarks = {
        bold: editor.isActive("bold"),
        bulletList: editor.isActive("bulletList"),
        italic: editor.isActive("italic"),
        orderedList: editor.isActive("orderedList"),
        strike: editor.isActive("strike"),
      };

      return h(
        ark.div as ArkPart,
        {
          ...attrs,
          class: recipeSlots.toolbar({ class: props.class }),
          "data-part": "toolbar",
          "data-scope": "rich-text-editor",
        },
        () =>
          slots.default?.() ?? [
            h("div", { class: recipeSlots.inline() }, () => [
              h(
                Toggle as ArkPart,
                {
                  "aria-label": "Bold",
                  onPressedChange: () => editor.chain().focus().toggleBold().run(),
                  pressed: activeMarks.bold,
                  size: "sm",
                  variant: "ghost",
                },
                () => [h(PhTextB), h(VisuallyHidden as ArkPart, {}, () => "Bold")],
              ),
              h(
                Toggle as ArkPart,
                {
                  "aria-label": "Italic",
                  onPressedChange: () => editor.chain().focus().toggleItalic().run(),
                  pressed: activeMarks.italic,
                  size: "sm",
                  variant: "ghost",
                },
                () => [h(PhTextItalic), h(VisuallyHidden as ArkPart, {}, () => "Italic")],
              ),
              h(
                Toggle as ArkPart,
                {
                  "aria-label": "Strikethrough",
                  onPressedChange: () => editor.chain().focus().toggleStrike().run(),
                  pressed: activeMarks.strike,
                  size: "sm",
                  variant: "ghost",
                },
                () => [
                  h(PhTextStrikethrough),
                  h(VisuallyHidden as ArkPart, {}, () => "Strikethrough"),
                ],
              ),
              h(
                Toggle as ArkPart,
                {
                  "aria-label": "Bullet list",
                  onPressedChange: () => editor.chain().focus().toggleBulletList().run(),
                  pressed: activeMarks.bulletList,
                  size: "sm",
                  variant: "ghost",
                },
                () => [h(PhListBullets), h(VisuallyHidden as ArkPart, {}, () => "Bullet list")],
              ),
              h(
                Toggle as ArkPart,
                {
                  "aria-label": "Ordered list",
                  onPressedChange: () => editor.chain().focus().toggleOrderedList().run(),
                  pressed: activeMarks.orderedList,
                  size: "sm",
                  variant: "ghost",
                },
                () => [h(PhListNumbers), h(VisuallyHidden as ArkPart, {}, () => "Ordered list")],
              ),
            ]),
          ],
      );
    };
  },
});

export const RichTextEditorContent = defineComponent({
  inheritAttrs: false,
  name: "RichTextEditorContent",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs }) {
    const context = useRichTextEditorContext();

    return () => {
      const recipeSlots = context?.slots;

      return h(
        ark.div as ArkPart,
        {
          ...attrs,
          class: recipeSlots?.content({ class: props.class }),
          "data-part": "content",
          "data-scope": "rich-text-editor",
        },
        () => h(EditorContent as ArkPart, { editor: context?.editor }),
      );
    };
  },
});

export const RichTextEditorShorthand = defineComponent({
  inheritAttrs: false,
  name: "RichTextEditor",
  props: richTextEditorRootProps,
  setup(props, { attrs }) {
    return () =>
      h(RichTextEditorRoot as ArkPart, { ...attrs, ...props }, () => [
        h(RichTextEditorToolbar),
        h(RichTextEditorContent),
      ]);
  },
});
// #endregion
