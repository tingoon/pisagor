<script lang="ts">
import { Field } from "@pisagor/svelte";
import type { ComponentProps, Snippet } from "svelte";

type FieldProps = ComponentProps<typeof Field>;
type FieldLabelProps = ComponentProps<typeof Field.Label>;

interface Props {
  class?: string | undefined;
  description?: string | undefined;
  error?: string | undefined;
  id?: string | undefined;
  invalid?: boolean | undefined;
  label?: string | undefined;
  labelAccessory?: Snippet | undefined;
  labelProps?: Omit<FieldLabelProps, "children" | "for"> | undefined;
  orientation?: FieldProps["orientation"];
  children?: Snippet;
}

let {
  class: className,
  description,
  error,
  id,
  invalid,
  label,
  labelAccessory,
  labelProps,
  orientation,
  children,
}: Props = $props();

const hasLabel = $derived(Boolean(label || labelAccessory));
</script>

<Field class={className} {invalid} {orientation}>
  {#if hasLabel}
    <Field.Label {...labelProps} for={id}>
      {label}
      {#if labelAccessory}
        {@render labelAccessory()}
      {/if}
    </Field.Label>
  {/if}
  {#if description}
    <Field.Description>{description}</Field.Description>
  {/if}
  {@render children?.()}
  {#if error}
    <Field.Error>{error}</Field.Error>
  {/if}
</Field>
