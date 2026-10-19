import {
  ListBulletsIcon,
  ListNumbersIcon,
  TextBIcon,
  TextItalicIcon,
  TextStrikethroughIcon,
} from "@phosphor-icons/react";
import type { RichTextEditorRootContract } from "@pisagor/contracts";
import { richTextEditorRecipe } from "@pisagor/recipes";
import { EditorContent, useEditor, useEditorState } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEffect, useMemo } from "react";
import type { ComponentPropsWithRef, ReactNode } from "react";
import { createSlotRecipeContext } from "../../internal";
import { useLocale } from "../provider/context";
import { Toggle } from "../toggle";
import { VisuallyHidden } from "../visually-hidden";
import {
  RichTextEditorContext,
  useRichTextEditorState,
} from "./rich-text-editor.context";

// #region Context
const { withContext, withProvider, useStyles } = createSlotRecipeContext({
  name: "RichTextEditor",
  recipe: richTextEditorRecipe,
});
// #endregion

// #region Types
type RichTextEditorRootProps = Omit<
  ComponentPropsWithRef<"div">,
  "defaultValue" | "onChange"
> &
  RichTextEditorRootContract & {
    /** Initial HTML content for uncontrolled usage. */
    defaultValue?: string;
    /** Controlled HTML content. */
    value?: string;
    /** Called with HTML when the document changes. */
    onValueChange?: (value: string) => void;
    /** Called when the editor loses focus. */
    onBlur?: () => void;
    /** Native form field name for a hidden input mirroring the HTML value. */
    name?: string;
    /**
     * Whether the editor is read-only.
     *
     * @defaultValue false
     */
    readOnly?: boolean;
    /**
     * Whether the editor is disabled.
     *
     * @defaultValue false
     */
    disabled?: boolean;
    /**
     * Marks the control as invalid for styling and assistive tech.
     *
     * @defaultValue false
     */
    invalid?: boolean;
    /**
     * Accessible name for the editing region.
     *
     * @defaultValue "Rich text editor"
     */
    "aria-label"?: string;
    children?: ReactNode;
  };

type RichTextEditorToolbarProps = ComponentPropsWithRef<"div">;

type RichTextEditorContentProps = ComponentPropsWithRef<"div">;
// #endregion

// #region Parts
const RootBase = withProvider<RichTextEditorRootProps>("div", {
  defaultProps: {
    role: "group",
  },
  name: "Root",
});

function Root({
  defaultValue,
  disabled = false,
  invalid = false,
  name,
  readOnly = false,
  value,
  "aria-label": ariaLabel,
  children,
  id,
  onBlur,
  onValueChange,
  ...rest
}: RichTextEditorRootProps) {
  const { m } = useLocale();
  const resolvedAriaLabel =
    ariaLabel ?? (id ? undefined : m("richTextEditor.label"));

  const editor = useEditor({
    content: value ?? defaultValue ?? "<p></p>",
    editable: !(readOnly || disabled),
    editorProps: {
      attributes: {
        ...(id ? { id } : {}),
        "aria-invalid": invalid ? "true" : "false",
      },
    },
    extensions: [StarterKit],
    immediatelyRender: false,
    onBlur: () => {
      onBlur?.();
    },
    onUpdate: ({ editor: current }) => {
      onValueChange?.(current.getHTML());
    },
  });

  useEffect(() => {
    if (!editor || value === undefined) {
      return;
    }

    const nextValue = value === "" ? "<p></p>" : value;
    const current = editor.getHTML();

    if (nextValue !== current) {
      editor.commands.setContent(nextValue, { emitUpdate: false });
    }
  }, [editor, value]);

  useEffect(() => {
    editor?.setEditable(!(readOnly || disabled));
  }, [disabled, editor, readOnly]);

  useEffect(() => {
    if (!editor) {
      return;
    }

    editor.setOptions({
      editorProps: {
        attributes: {
          ...(id ? { id } : {}),
          "aria-invalid": invalid ? "true" : "false",
        },
      },
    });
  }, [editor, id, invalid]);

  const contextValue = useMemo(() => ({ editor }), [editor]);

  return (
    <RootBase
      {...rest}
      aria-disabled={disabled || undefined}
      aria-invalid={invalid || undefined}
      aria-label={resolvedAriaLabel}
      aria-readonly={readOnly || undefined}
      data-disabled={disabled ? "true" : undefined}
      data-invalid={invalid ? "true" : undefined}
      data-readonly={readOnly ? "true" : undefined}
    >
      <RichTextEditorContext value={contextValue}>
        {name ? (
          <VisuallyHidden>
            <input
              name={name}
              readOnly
              tabIndex={-1}
              type="hidden"
              value={value ?? editor?.getHTML() ?? defaultValue ?? ""}
            />
          </VisuallyHidden>
        ) : null}
        {children}
      </RichTextEditorContext>
    </RootBase>
  );
}

const ToolbarBase = withContext<RichTextEditorToolbarProps>("div", {
  name: "Toolbar",
});

function Toolbar({ children, className, ...rest }: RichTextEditorToolbarProps) {
  const { m } = useLocale();
  const { slots } = useStyles();
  const { editor } = useRichTextEditorState();
  const activeMarks = useEditorState({
    editor,
    selector: ({ editor: current }) => {
      if (!current) {
        return {
          bold: false,
          bulletList: false,
          italic: false,
          orderedList: false,
          strike: false,
        };
      }

      return {
        bold: current.isActive("bold"),
        bulletList: current.isActive("bulletList"),
        italic: current.isActive("italic"),
        orderedList: current.isActive("orderedList"),
        strike: current.isActive("strike"),
      };
    },
  });

  if (!editor || !activeMarks) {
    return null;
  }

  return (
    <ToolbarBase {...rest} className={className}>
      {children ?? (
        <div className={slots.inline()}>
          <Toggle
            aria-label={m("richTextEditor.bold")}
            onPressedChange={() => editor.chain().focus().toggleBold().run()}
            pressed={activeMarks.bold}
            size="sm"
            variant="ghost"
          >
            <TextBIcon />
          </Toggle>
          <Toggle
            aria-label={m("richTextEditor.italic")}
            onPressedChange={() => editor.chain().focus().toggleItalic().run()}
            pressed={activeMarks.italic}
            size="sm"
            variant="ghost"
          >
            <TextItalicIcon />
          </Toggle>
          <Toggle
            aria-label={m("richTextEditor.strikethrough")}
            onPressedChange={() => editor.chain().focus().toggleStrike().run()}
            pressed={activeMarks.strike}
            size="sm"
            variant="ghost"
          >
            <TextStrikethroughIcon />
          </Toggle>
          <Toggle
            aria-label={m("richTextEditor.bulletList")}
            onPressedChange={() =>
              editor.chain().focus().toggleBulletList().run()
            }
            pressed={activeMarks.bulletList}
            size="sm"
            variant="ghost"
          >
            <ListBulletsIcon />
          </Toggle>
          <Toggle
            aria-label={m("richTextEditor.orderedList")}
            onPressedChange={() =>
              editor.chain().focus().toggleOrderedList().run()
            }
            pressed={activeMarks.orderedList}
            size="sm"
            variant="ghost"
          >
            <ListNumbersIcon />
          </Toggle>
        </div>
      )}
    </ToolbarBase>
  );
}

const ContentBase = withContext<RichTextEditorContentProps>("div", {
  name: "Content",
});

function Content({ className, ...rest }: RichTextEditorContentProps) {
  const { editor } = useRichTextEditorState();

  return (
    <ContentBase {...rest} className={className}>
      <EditorContent editor={editor} />
    </ContentBase>
  );
}
// #endregion

// #region Shorthand
function RichTextEditorShorthand(
  props: Omit<RichTextEditorRootProps, "children">,
) {
  return (
    <Root {...props}>
      <Toolbar />

      <Content />
    </Root>
  );
}
// #endregion

export type {
  RichTextEditorContentProps,
  RichTextEditorRootProps,
  RichTextEditorToolbarProps,
};

export const RichTextEditorRoot = Root;
export const RichTextEditorToolbar = Toolbar;
export const RichTextEditorContent = Content;
export { RichTextEditorShorthand };
