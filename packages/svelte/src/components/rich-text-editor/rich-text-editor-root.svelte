<script lang="ts">
  import type { RichTextEditorRootContract } from "@pisagor/contracts";
  import { Editor } from "@tiptap/core";
  import StarterKit from "@tiptap/starter-kit";
  import { untrack } from "svelte";
  import type { HTMLAttributes } from "svelte/elements";
  import { useLocale } from "../provider/context";
  import VisuallyHidden from "../visually-hidden.svelte";
  import {
    setRichTextEditorContext,
    withProvider,
  } from "./rich-text-editor.context";

  const { m } = useLocale();

  type Props = Omit<HTMLAttributes<HTMLFieldSetElement>, "onblur"> & {
    defaultValue?: string;
    value?: string;
    onValueChange?: (value: string) => void;
    onBlur?: () => void;
    name?: string;
    readOnly?: boolean;
    disabled?: boolean;
    invalid?: boolean;
    "aria-label"?: string | undefined | null;
    children?: import("svelte").Snippet;
    id?: string | undefined | null;
  } & RichTextEditorRootContract;

  let {
    defaultValue,
    disabled,
    invalid,
    name,
    readOnly,
    value,
    "aria-label": ariaLabel,
    children,
    id,
    onBlur,
    onValueChange,
    ...rest
  }: Props = $props();

  const root = withProvider(
    () => ({
      ...rest,
      "aria-disabled": disabled || undefined,
      "aria-invalid": invalid || undefined,
      "aria-label": ariaLabel ?? (id ? undefined : m("richTextEditor.label")),
      "aria-readonly": readOnly || undefined,
      "data-disabled": disabled ? "true" : undefined,
      "data-invalid": invalid ? "true" : undefined,
      "data-readonly": readOnly ? "true" : undefined,
    }),
    {
      defaultProps: {
        role: "group",
      },
      name: "Root",
    },
  );

  let hostEl = $state<HTMLDivElement | null>(null);
  let editor = $state<Editor | undefined>(undefined);
  let revision = $state(0);

  function registerHost(el: HTMLDivElement | null) {
    hostEl = el;
  }

  $effect(() => {
    const el = hostEl;
    if (!el) return;

    const instance = new Editor({
      content: untrack(() => value ?? defaultValue ?? "<p></p>"),
      editable: untrack(() => !(readOnly || disabled)),
      editorProps: {
        attributes: untrack(() => ({
          ...(id ? { id } : {}),
          "aria-invalid": invalid ? "true" : "false",
        })),
      },
      element: el,
      extensions: [StarterKit],
      onBlur: () => {
        onBlur?.();
      },
      onTransaction: () => {
        revision += 1;
      },
      onUpdate: ({ editor: current }) => {
        onValueChange?.(current.getHTML());
      },
    });
    editor = instance;

    return () => {
      instance.destroy();
      editor = undefined;
    };
  });

  $effect(() => {
    const current = editor;
    if (!current || value === undefined) return;
    const nextValue = value === "" ? "<p></p>" : value;
    if (nextValue !== current.getHTML()) {
      current.commands.setContent(nextValue, { emitUpdate: false });
    }
  });

  $effect(() => {
    editor?.setEditable(!(readOnly || disabled));
  });

  $effect(() => {
    const current = editor;
    if (!current) return;
    current.setOptions({
      editorProps: {
        attributes: {
          ...(id ? { id } : {}),
          "aria-invalid": invalid ? "true" : "false",
        },
      },
    });
  });

  const htmlValue = $derived(value ?? editor?.getHTML() ?? defaultValue ?? "");

  setRichTextEditorContext({
    get editor() {
      return editor;
    },
    registerHost,
    get revision() {
      return revision;
    },
    get slots() {
      return root.styles.slots;
    },
  });
</script>

<fieldset {...root.props}>
  {#if name}
    <VisuallyHidden>
      <input {name} readonly tabindex={-1} type="hidden" value={htmlValue} />
    </VisuallyHidden>
  {/if}
  {@render children?.()}
</fieldset>
