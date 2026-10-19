import type { RichTextEditorRootContract } from "@pisagor/contracts";
import { richTextEditorRecipe } from "@pisagor/recipes";
import { Editor } from "@tiptap/core";
import StarterKit from "@tiptap/starter-kit";
import type { ComponentProps, JSX } from "solid-js";
import {
  createEffect,
  createSignal,
  onCleanup,
  Show,
  splitProps,
  untrack,
} from "solid-js";
import { createEditorTransaction } from "solid-tiptap";
import {
  ListBulletsIcon,
  ListNumbersIcon,
  TextBIcon,
  TextItalicIcon,
  TextStrikethroughIcon,
  createSlotRecipeContext,
} from "../../internal";
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
  ComponentProps<"div">,
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
    children?: JSX.Element;
  };

type RichTextEditorToolbarProps = ComponentProps<"div">;

type RichTextEditorContentProps = ComponentProps<"div">;
// #endregion

// #region Parts
const RootBase = withProvider<RichTextEditorRootProps>("div", {
  defaultProps: {
    role: "group",
  },
  name: "Root",
});

function Root(props: RichTextEditorRootProps): JSX.Element {
  const { m } = useLocale();
  const [local, rest] = splitProps(props, [
    "defaultValue",
    "disabled",
    "invalid",
    "name",
    "readOnly",
    "value",
    "aria-label",
    "children",
    "id",
    "onBlur",
    "onValueChange",
  ]);

  const resolvedAriaLabel = () =>
    local["aria-label"] ?? (local.id ? undefined : m("richTextEditor.label"));

  const [host, setHost] = createSignal<HTMLDivElement | undefined>();
  const [editor, setEditor] = createSignal<Editor | undefined>();

  createEffect(() => {
    const el = host();
    if (!el) return;

    const instance = new Editor({
      content: untrack(() => local.value ?? local.defaultValue ?? "<p></p>"),
      editable: untrack(() => !(local.readOnly || local.disabled)),
      editorProps: {
        attributes: untrack(() => ({
          ...(local.id ? { id: local.id } : {}),
          "aria-invalid": local.invalid ? "true" : "false",
        })),
      },
      element: el,
      extensions: [StarterKit],
      onBlur: () => {
        local.onBlur?.();
      },
      onUpdate: ({ editor: current }) => {
        local.onValueChange?.(current.getHTML());
      },
    });
    setEditor(instance);
    onCleanup(() => {
      instance.destroy();
      setEditor(undefined);
    });
  });

  createEffect(() => {
    const current = editor();
    if (!current || local.value === undefined) return;
    const nextValue = local.value === "" ? "<p></p>" : local.value;
    if (nextValue !== current.getHTML()) {
      current.commands.setContent(nextValue, { emitUpdate: false });
    }
  });

  createEffect(() => {
    editor()?.setEditable(!(local.readOnly || local.disabled));
  });

  createEffect(() => {
    const current = editor();
    if (!current) return;
    current.setOptions({
      editorProps: {
        attributes: {
          ...(local.id ? { id: local.id } : {}),
          "aria-invalid": local.invalid ? "true" : "false",
        },
      },
    });
  });

  const htmlValue = () =>
    local.value ?? editor()?.getHTML() ?? local.defaultValue ?? "";

  return (
    <RootBase
      {...rest}
      aria-disabled={local.disabled || undefined}
      aria-invalid={local.invalid || undefined}
      aria-label={resolvedAriaLabel()}
      aria-readonly={local.readOnly || undefined}
      data-disabled={local.disabled ? "true" : undefined}
      data-invalid={local.invalid ? "true" : undefined}
      data-readonly={local.readOnly ? "true" : undefined}
    >
      <RichTextEditorContext
        value={{
          editor,
          registerHost: setHost,
        }}
      >
        <Show when={local.name}>
          {(name) => (
            <VisuallyHidden>
              <input
                name={name()}
                readOnly
                tabIndex={-1}
                type="hidden"
                value={htmlValue()}
              />
            </VisuallyHidden>
          )}
        </Show>
        {local.children}
      </RichTextEditorContext>
    </RootBase>
  );
}

const ToolbarBase = withContext<RichTextEditorToolbarProps>("div", {
  name: "Toolbar",
});

function Toolbar(props: RichTextEditorToolbarProps): JSX.Element {
  const { m } = useLocale();
  const [local, rest] = splitProps(props, ["children", "class"]);
  const { slots } = useStyles();
  const { editor } = useRichTextEditorState();

  const bold = createEditorTransaction(
    editor,
    (current) => current?.isActive("bold") ?? false,
  );
  const italic = createEditorTransaction(
    editor,
    (current) => current?.isActive("italic") ?? false,
  );
  const strike = createEditorTransaction(
    editor,
    (current) => current?.isActive("strike") ?? false,
  );
  const bulletList = createEditorTransaction(
    editor,
    (current) => current?.isActive("bulletList") ?? false,
  );
  const orderedList = createEditorTransaction(
    editor,
    (current) => current?.isActive("orderedList") ?? false,
  );

  return (
    <Show when={editor()}>
      {(instance) => (
        <ToolbarBase {...rest} class={local.class}>
          <Show
            fallback={
              <div class={slots.inline()}>
                <Toggle
                  aria-label={m("richTextEditor.bold")}
                  onPressedChange={() =>
                    instance().chain().focus().toggleBold().run()
                  }
                  pressed={bold()}
                  size="sm"
                  variant="ghost"
                >
                  <TextBIcon />
                </Toggle>
                <Toggle
                  aria-label={m("richTextEditor.italic")}
                  onPressedChange={() =>
                    instance().chain().focus().toggleItalic().run()
                  }
                  pressed={italic()}
                  size="sm"
                  variant="ghost"
                >
                  <TextItalicIcon />
                </Toggle>
                <Toggle
                  aria-label={m("richTextEditor.strikethrough")}
                  onPressedChange={() =>
                    instance().chain().focus().toggleStrike().run()
                  }
                  pressed={strike()}
                  size="sm"
                  variant="ghost"
                >
                  <TextStrikethroughIcon />
                </Toggle>
                <Toggle
                  aria-label={m("richTextEditor.bulletList")}
                  onPressedChange={() =>
                    instance().chain().focus().toggleBulletList().run()
                  }
                  pressed={bulletList()}
                  size="sm"
                  variant="ghost"
                >
                  <ListBulletsIcon />
                </Toggle>
                <Toggle
                  aria-label={m("richTextEditor.orderedList")}
                  onPressedChange={() =>
                    instance().chain().focus().toggleOrderedList().run()
                  }
                  pressed={orderedList()}
                  size="sm"
                  variant="ghost"
                >
                  <ListNumbersIcon />
                </Toggle>
              </div>
            }
            when={local.children}
          >
            {local.children}
          </Show>
        </ToolbarBase>
      )}
    </Show>
  );
}

const ContentBase = withContext<RichTextEditorContentProps>("div", {
  name: "Content",
});

function Content(props: RichTextEditorContentProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { registerHost } = useRichTextEditorState();

  return (
    <ContentBase {...rest} class={local.class} ref={(el) => registerHost(el)} />
  );
}
// #endregion

// #region Shorthand
function RichTextEditorShorthand(
  props: Omit<RichTextEditorRootProps, "children">,
): JSX.Element {
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
