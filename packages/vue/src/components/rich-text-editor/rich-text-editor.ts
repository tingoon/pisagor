import {
  PhListBullets,
  PhListNumbers,
  PhTextB,
  PhTextItalic,
  PhTextStrikethrough,
} from "@phosphor-icons/vue";
import type { RichTextEditorRootContract } from "@pisagor/contracts";
import { richTextEditorRecipe } from "@pisagor/recipes";
import StarterKit from "@tiptap/starter-kit";
import { type Editor, EditorContent, useEditor } from "@tiptap/vue-3";
import {
  defineComponent,
  h,
  type PropType,
  shallowReactive,
  watch,
  watchEffect,
} from "vue";
import {
  type ClassValue,
  createContext,
  createSlotRecipeContext,
} from "../../internal";
import { useLocale } from "../provider/context";
import { Toggle } from "../toggle";
import { VisuallyHidden } from "../visually-hidden";

// #region Context
const { withContext, withProvider, useStyles } = createSlotRecipeContext({
  name: "RichTextEditor",
  recipe: richTextEditorRecipe,
});

interface RichTextEditorStateValue {
  editor: Editor | null;
}

const [provideRichTextEditorState, useRichTextEditorState] =
  createContext("RichTextEditor")<RichTextEditorStateValue>();

/** Access the TipTap editor instance from the nearest RichTextEditor root. */
export function useRichTextEditor() {
  return useRichTextEditorState()?.editor ?? null;
}
// #endregion

type ArkPart = Parameters<typeof h>[0];

// #region Types
export interface RichTextEditorRootProps extends RichTextEditorRootContract {
  "aria-label"?: string;
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
  class?: unknown;
}

export interface RichTextEditorToolbarProps {
  class?: unknown;
}

export interface RichTextEditorContentProps {
  class?: unknown;
}
// #endregion

const richTextEditorRootProps = {
  "aria-label": String,
  class: { type: [String, Object, Array] as PropType<ClassValue> },
  defaultValue: { default: undefined, type: String },
  disabled: { default: false, type: Boolean },
  id: String,
  invalid: { default: false, type: Boolean },
  name: String,
  onBlur: {
    default: undefined,
    type: Function as PropType<RichTextEditorRootProps["onBlur"]>,
  },
  onValueChange: {
    default: undefined,
    type: Function as PropType<RichTextEditorRootProps["onValueChange"]>,
  },
  readOnly: { default: false, type: Boolean },
  recipe: {
    default: richTextEditorRecipe,
    type: Function as PropType<typeof richTextEditorRecipe>,
  },
  value: { default: undefined, type: String },
  variant: {
    default: undefined,
    type: String as PropType<RichTextEditorRootContract["variant"]>,
  },
};

// #region Parts
const RootBase = withProvider<RichTextEditorRootProps>("div", {
  defaultProps: {
    role: "group",
  },
  name: "Root",
});

export const RichTextEditorRoot = defineComponent({
  inheritAttrs: false,
  name: "RichTextEditor.Root",
  props: richTextEditorRootProps,
  setup(props, { attrs, slots }) {
    const { m } = useLocale();

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

    const stateValue = shallowReactive<RichTextEditorStateValue>({
      editor: null,
    });

    watchEffect(() => {
      stateValue.editor = editor.value ?? null;
    });

    provideRichTextEditorState(stateValue);

    return () => {
      const resolvedAriaLabel =
        props["aria-label"] ??
        (props.id ? undefined : m("richTextEditor.label"));

      return h(
        RootBase,
        {
          ...attrs,
          "aria-disabled": props.disabled || undefined,
          "aria-invalid": props.invalid || undefined,
          "aria-label": resolvedAriaLabel,
          "aria-readonly": props.readOnly || undefined,
          class: props.class,
          "data-disabled": props.disabled ? "true" : undefined,
          "data-invalid": props.invalid ? "true" : undefined,
          "data-readonly": props.readOnly ? "true" : undefined,
          recipe: props.recipe,
          variant: props.variant,
        },
        () => [
          props.name
            ? h(VisuallyHidden as ArkPart, {}, () =>
                h("input", {
                  name: props.name,
                  readOnly: true,
                  tabIndex: -1,
                  type: "hidden",
                  value:
                    props.value ??
                    editor.value?.getHTML() ??
                    props.defaultValue ??
                    "",
                }),
              )
            : null,
          slots.default?.(),
        ],
      );
    };
  },
});

const ToolbarBase = withContext<RichTextEditorToolbarProps>("div", {
  name: "Toolbar",
});

export const RichTextEditorToolbar = defineComponent({
  inheritAttrs: false,
  name: "RichTextEditor.Toolbar",
  props: {
    class: { type: [String, Object, Array] as PropType<ClassValue> },
  },
  setup(props, { attrs, slots }) {
    const { m } = useLocale();
    const styles = useStyles();
    const state = useRichTextEditorState();

    return () => {
      const editor = state?.editor;

      if (!editor) {
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
        ToolbarBase,
        {
          ...attrs,
          class: props.class,
        },
        () =>
          slots.default?.() ??
          h("div", { class: styles.slots.inline() }, [
            h(
              Toggle as ArkPart,
              {
                "aria-label": m("richTextEditor.bold"),
                onPressedChange: () =>
                  editor.chain().focus().toggleBold().run(),
                pressed: activeMarks.bold,
                size: "sm",
                variant: "ghost",
              },
              () => h(PhTextB),
            ),
            h(
              Toggle as ArkPart,
              {
                "aria-label": m("richTextEditor.italic"),
                onPressedChange: () =>
                  editor.chain().focus().toggleItalic().run(),
                pressed: activeMarks.italic,
                size: "sm",
                variant: "ghost",
              },
              () => h(PhTextItalic),
            ),
            h(
              Toggle as ArkPart,
              {
                "aria-label": m("richTextEditor.strikethrough"),
                onPressedChange: () =>
                  editor.chain().focus().toggleStrike().run(),
                pressed: activeMarks.strike,
                size: "sm",
                variant: "ghost",
              },
              () => h(PhTextStrikethrough),
            ),
            h(
              Toggle as ArkPart,
              {
                "aria-label": m("richTextEditor.bulletList"),
                onPressedChange: () =>
                  editor.chain().focus().toggleBulletList().run(),
                pressed: activeMarks.bulletList,
                size: "sm",
                variant: "ghost",
              },
              () => h(PhListBullets),
            ),
            h(
              Toggle as ArkPart,
              {
                "aria-label": m("richTextEditor.orderedList"),
                onPressedChange: () =>
                  editor.chain().focus().toggleOrderedList().run(),
                pressed: activeMarks.orderedList,
                size: "sm",
                variant: "ghost",
              },
              () => h(PhListNumbers),
            ),
          ]),
      );
    };
  },
});

const ContentBase = withContext<RichTextEditorContentProps>("div", {
  name: "Content",
});

export const RichTextEditorContent = defineComponent({
  inheritAttrs: false,
  name: "RichTextEditor.Content",
  props: {
    class: { type: [String, Object, Array] as PropType<ClassValue> },
  },
  setup(props, { attrs }) {
    const state = useRichTextEditorState();

    return () =>
      h(
        ContentBase,
        {
          ...attrs,
          class: props.class,
        },
        () => h(EditorContent as ArkPart, { editor: state?.editor }),
      );
  },
});
// #endregion

// #region Shorthand
export const RichTextEditorShorthand = defineComponent({
  inheritAttrs: false,
  name: "RichTextEditor",
  props: richTextEditorRootProps,
  setup(props, { attrs }) {
    return () =>
      h(RichTextEditorRoot, { ...attrs, ...props }, () => [
        h(RichTextEditorToolbar),
        h(RichTextEditorContent),
      ]);
  },
});
// #endregion
