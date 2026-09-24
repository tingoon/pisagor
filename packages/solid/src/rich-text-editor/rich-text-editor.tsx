import { ark } from "@ark-ui/solid/factory";
import { formControlShellRecipe } from "@pisagor/recipes/form-control";
import { richTextEditorRecipe } from "@pisagor/recipes/rich-text-editor";
import { cn } from "@pisagor/utils";
import { Editor } from "@tiptap/core";
import StarterKit from "@tiptap/starter-kit";
import type { ComponentProps, JSX } from "solid-js";
import { createEffect, createSignal, onCleanup, Show, splitProps, untrack } from "solid-js";
import { createEditorTransaction } from "solid-tiptap";
import { useFormControlSurface } from "../components/surface/use-form-control-surface";
import { Toggle } from "../components/toggle";
import { VisuallyHidden } from "../components/visually-hidden";
import {
  ListBulletsIcon,
  ListNumbersIcon,
  TextBIcon,
  TextItalicIcon,
  TextStrikethroughIcon,
} from "../internal/icons";
import { RichTextEditorContext, useRichTextEditorState } from "./rich-text-editor.context";

type FormControlVariant = "primary" | "secondary";

export interface RichTextEditorRootProps
  extends Omit<ComponentProps<typeof ark.div>, "defaultValue" | "onChange"> {
  variant?: FormControlVariant;
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  onBlur?: () => void;
  name?: string;
  readOnly?: boolean;
  disabled?: boolean;
  invalid?: boolean;
  "aria-label"?: string;
  children?: JSX.Element;
  recipe?: typeof richTextEditorRecipe;
}

export type RichTextEditorToolbarProps = ComponentProps<typeof ark.div>;
export type RichTextEditorContentProps = ComponentProps<typeof ark.div>;

export function RichTextEditorRoot(props: RichTextEditorRootProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "variant",
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
    "recipe",
    "class",
  ]);

  const surfaceVariant = useFormControlSurface();
  const variant = () => local.variant ?? ("primary" as FormControlVariant);
  const recipe = () => local.recipe ?? richTextEditorRecipe;
  const slots = () => recipe()();
  const resolvedAriaLabel = () =>
    local["aria-label"] ?? (local.id ? undefined : "Rich text editor");

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

  const htmlValue = () => local.value ?? editor()?.getHTML() ?? local.defaultValue ?? "";

  return (
    <RichTextEditorContext
      value={{
        editor,
        registerHost: setHost,
        slots: slots(),
      }}
    >
      <ark.div
        {...rest}
        aria-disabled={local.disabled || undefined}
        aria-invalid={local.invalid || undefined}
        aria-label={resolvedAriaLabel()}
        aria-readonly={local.readOnly || undefined}
        class={cn(
          formControlShellRecipe({ surfaceVariant, variant: variant() }),
          slots().base({ class: local.class }),
          local.disabled && "pointer-events-none opacity-64",
        )}
        data-disabled={local.disabled ? "true" : undefined}
        data-invalid={local.invalid ? "true" : undefined}
        data-part="root"
        data-readonly={local.readOnly ? "true" : undefined}
        data-scope="rich-text-editor"
        data-variant={variant()}
        role="group"
      >
        <Show when={local.name}>
          {(name) => (
            <VisuallyHidden>
              <input name={name()} readOnly tabIndex={-1} type="hidden" value={htmlValue()} />
            </VisuallyHidden>
          )}
        </Show>
        {local.children}
      </ark.div>
    </RichTextEditorContext>
  );
}

export function RichTextEditorToolbar(props: RichTextEditorToolbarProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class"]);
  const { editor, slots } = useRichTextEditorState();

  const bold = createEditorTransaction(editor, (current) => current?.isActive("bold") ?? false);
  const italic = createEditorTransaction(editor, (current) => current?.isActive("italic") ?? false);
  const strike = createEditorTransaction(editor, (current) => current?.isActive("strike") ?? false);
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
        <ark.div
          {...rest}
          class={slots.toolbar({ class: local.class })}
          data-part="toolbar"
          data-scope="rich-text-editor"
        >
          <Show
            fallback={
              <div class={slots.inline()}>
                <Toggle
                  aria-label="Bold"
                  onPressedChange={() => instance().chain().focus().toggleBold().run()}
                  pressed={bold()}
                  size="sm"
                  variant="ghost"
                >
                  <TextBIcon />
                  <VisuallyHidden>Bold</VisuallyHidden>
                </Toggle>
                <Toggle
                  aria-label="Italic"
                  onPressedChange={() => instance().chain().focus().toggleItalic().run()}
                  pressed={italic()}
                  size="sm"
                  variant="ghost"
                >
                  <TextItalicIcon />
                  <VisuallyHidden>Italic</VisuallyHidden>
                </Toggle>
                <Toggle
                  aria-label="Strikethrough"
                  onPressedChange={() => instance().chain().focus().toggleStrike().run()}
                  pressed={strike()}
                  size="sm"
                  variant="ghost"
                >
                  <TextStrikethroughIcon />
                  <VisuallyHidden>Strikethrough</VisuallyHidden>
                </Toggle>
                <Toggle
                  aria-label="Bullet list"
                  onPressedChange={() => instance().chain().focus().toggleBulletList().run()}
                  pressed={bulletList()}
                  size="sm"
                  variant="ghost"
                >
                  <ListBulletsIcon />
                  <VisuallyHidden>Bullet list</VisuallyHidden>
                </Toggle>
                <Toggle
                  aria-label="Ordered list"
                  onPressedChange={() => instance().chain().focus().toggleOrderedList().run()}
                  pressed={orderedList()}
                  size="sm"
                  variant="ghost"
                >
                  <ListNumbersIcon />
                  <VisuallyHidden>Ordered list</VisuallyHidden>
                </Toggle>
              </div>
            }
            when={local.children}
          >
            {local.children}
          </Show>
        </ark.div>
      )}
    </Show>
  );
}

export function RichTextEditorContent(props: RichTextEditorContentProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { registerHost, slots } = useRichTextEditorState();

  return (
    <ark.div
      {...rest}
      class={slots.content({ class: local.class })}
      data-part="content"
      data-scope="rich-text-editor"
      ref={(el) => registerHost(el)}
    />
  );
}

export function RichTextEditorShorthand(
  props: Omit<RichTextEditorRootProps, "children">,
): JSX.Element {
  return (
    <RichTextEditorRoot {...props}>
      <RichTextEditorToolbar />
      <RichTextEditorContent />
    </RichTextEditorRoot>
  );
}
