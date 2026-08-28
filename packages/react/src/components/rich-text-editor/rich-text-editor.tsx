import { ark } from "@ark-ui/react/factory";
import {
  ListBulletsIcon,
  ListNumbersIcon,
  TextBIcon,
  TextItalicIcon,
  TextStrikethroughIcon,
} from "@phosphor-icons/react";
import { formControlShellVariants } from "@pisagor/recipes/form-control";
import { richTextEditorVariants } from "@pisagor/recipes/rich-text-editor";
import { EditorContent, useEditor, useEditorState } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { type ComponentProps, type ReactNode, useEffect, useMemo } from "react";
import { cn } from "../../internal/utils";
import { Toggle } from "../toggle";
import { VisuallyHidden } from "../visually-hidden";
import { RichTextEditorContext, useRichTextEditorState } from "./rich-text-editor.context";

// #region Types
type FormControlVariant = "primary" | "secondary";

export interface RichTextEditorRootProps
  extends Omit<ComponentProps<typeof ark.div>, "defaultValue" | "onChange"> {
  /**
   * Visual shell variant. Defaults to `primary`.
   */
  variant?: FormControlVariant;
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
}

export type RichTextEditorToolbarProps = ComponentProps<typeof ark.div>;

export type RichTextEditorContentProps = ComponentProps<typeof ark.div>;
// #endregion

// #region Parts
export function RichTextEditorRoot({
  variant: variantProp,
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
  className,
  ...rest
}: RichTextEditorRootProps) {
  const resolved = {
    surfaceVariant: undefined,
    variant: variantProp ?? ("primary" as FormControlVariant),
  };
  const shellArgs = { variant: resolved.variant };
  const controlProps = { "data-variant": resolved.variant };
  const resolvedAriaLabel = ariaLabel ?? (id ? undefined : "Rich text editor");
  const slots = richTextEditorVariants();

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

  const contextValue = useMemo(() => ({ editor, slots }), [editor, slots]);

  return (
    <RichTextEditorContext value={contextValue}>
      <ark.div
        {...rest}
        {...controlProps}
        aria-disabled={disabled || undefined}
        aria-invalid={invalid || undefined}
        aria-label={resolvedAriaLabel}
        aria-readonly={readOnly || undefined}
        className={cn(
          formControlShellVariants({ ...shellArgs }),
          slots.base({ className }),
          disabled && "pointer-events-none opacity-64",
        )}
        data-disabled={disabled ? "true" : undefined}
        data-invalid={invalid ? "true" : undefined}
        data-part="root"
        data-readonly={readOnly ? "true" : undefined}
        data-scope="rich-text-editor"
        role="group"
      >
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
      </ark.div>
    </RichTextEditorContext>
  );
}

export function RichTextEditorToolbar({
  children,
  className,
  ...rest
}: RichTextEditorToolbarProps) {
  const { editor, slots } = useRichTextEditorState();
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
    <ark.div
      {...rest}
      className={slots.toolbar({ className })}
      data-part="toolbar"
      data-scope="rich-text-editor"
    >
      {children ?? (
        <div className={slots.inline()}>
          <Toggle
            aria-label="Bold"
            onPressedChange={() => editor.chain().focus().toggleBold().run()}
            pressed={activeMarks.bold}
            size="sm"
            variant="ghost"
          >
            <TextBIcon />
            <VisuallyHidden>Bold</VisuallyHidden>
          </Toggle>
          <Toggle
            aria-label="Italic"
            onPressedChange={() => editor.chain().focus().toggleItalic().run()}
            pressed={activeMarks.italic}
            size="sm"
            variant="ghost"
          >
            <TextItalicIcon />
            <VisuallyHidden>Italic</VisuallyHidden>
          </Toggle>
          <Toggle
            aria-label="Strikethrough"
            onPressedChange={() => editor.chain().focus().toggleStrike().run()}
            pressed={activeMarks.strike}
            size="sm"
            variant="ghost"
          >
            <TextStrikethroughIcon />
            <VisuallyHidden>Strikethrough</VisuallyHidden>
          </Toggle>
          <Toggle
            aria-label="Bullet list"
            onPressedChange={() => editor.chain().focus().toggleBulletList().run()}
            pressed={activeMarks.bulletList}
            size="sm"
            variant="ghost"
          >
            <ListBulletsIcon />
            <VisuallyHidden>Bullet list</VisuallyHidden>
          </Toggle>
          <Toggle
            aria-label="Ordered list"
            onPressedChange={() => editor.chain().focus().toggleOrderedList().run()}
            pressed={activeMarks.orderedList}
            size="sm"
            variant="ghost"
          >
            <ListNumbersIcon />
            <VisuallyHidden>Ordered list</VisuallyHidden>
          </Toggle>
        </div>
      )}
    </ark.div>
  );
}

export function RichTextEditorContent({ className, ...rest }: RichTextEditorContentProps) {
  const { editor, slots } = useRichTextEditorState();

  return (
    <ark.div
      {...rest}
      className={slots.content({ className })}
      data-part="content"
      data-scope="rich-text-editor"
    >
      <EditorContent editor={editor} />
    </ark.div>
  );
}
// #endregion

// #region Shorthand
export function RichTextEditorShorthand(props: Omit<RichTextEditorRootProps, "children">) {
  return (
    <RichTextEditorRoot {...props}>
      <RichTextEditorToolbar />

      <RichTextEditorContent />
    </RichTextEditorRoot>
  );
}
// #endregion

// #region Display Names
RichTextEditorRoot.displayName = "RichTextEditor.Root";
RichTextEditorToolbar.displayName = "RichTextEditor.Toolbar";
RichTextEditorContent.displayName = "RichTextEditor.Content";
RichTextEditorShorthand.displayName = "RichTextEditor";
// #endregion
