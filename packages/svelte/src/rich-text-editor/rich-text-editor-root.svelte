<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { formControlShellRecipe } from "@pisagor/recipes/form-control";
import { richTextEditorRecipe } from "@pisagor/recipes/rich-text-editor";
import { cn } from "@pisagor/utils";
import { Editor } from "@tiptap/core";
import StarterKit from "@tiptap/starter-kit";
import { untrack } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
import { useFormControlSurface } from "../components/surface/use-form-control-surface";
import VisuallyHidden from "../components/visually-hidden/visually-hidden.svelte";
import { setRichTextEditorContext } from "./rich-text-editor.context";

type FormControlVariant = "primary" | "secondary";

type Props = Omit<HTMLAttributes<HTMLFieldSetElement>, "class" | "onblur"> & {
  variant?: FormControlVariant;
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
  class?: string | undefined;
  recipe?: typeof richTextEditorRecipe;
  id?: string | undefined | null;
};

let {
  variant: variantProp,
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
  recipe = richTextEditorRecipe,
  class: className,
  ...rest
}: Props = $props();

const surfaceVariant = useFormControlSurface();
const variant = $derived(variantProp ?? ("primary" as FormControlVariant));
const slots = $derived(recipe());
const resolvedAriaLabel = $derived(ariaLabel ?? (id ? undefined : "Rich text editor"));

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
    return slots;
  },
});
</script>

<Ark
  as="fieldset"
  {...rest}
  aria-disabled={disabled || undefined}
  aria-invalid={invalid || undefined}
  aria-label={resolvedAriaLabel}
  aria-readonly={readOnly || undefined}
  class={cn(
  "m-0 min-w-0 border-solid p-0",
  formControlShellRecipe({ surfaceVariant, variant }),
  slots.base({ class: className }),
  disabled && "pointer-events-none opacity-64",
)}
  data-disabled={disabled ? "true" : undefined}
  data-invalid={invalid ? "true" : undefined}
  data-part="root"
  data-readonly={readOnly ? "true" : undefined}
  data-scope="rich-text-editor"
  data-variant={variant}
>
  {#if name}
    <VisuallyHidden>
      <input {name} readonly tabindex={-1} type="hidden" value={htmlValue}>
    </VisuallyHidden>
  {/if}
  {@render children?.()}
</Ark>
