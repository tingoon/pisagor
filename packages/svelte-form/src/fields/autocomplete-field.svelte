<script lang="ts">
import { Autocomplete } from "@pisagor/svelte";
import type { ComponentProps, Snippet } from "svelte";
import FieldShell from "../internal/field-shell.svelte";

type AutocompleteProps = ComponentProps<typeof Autocomplete>;

interface AutocompleteOption {
  label: string;
  value: string;
}

type Props = Omit<
  AutocompleteProps,
  "invalid" | "name" | "onValueChange" | "value" | "items" | "children"
> & {
  class?: string | undefined;
  description?: string | undefined;
  error?: string | undefined;
  id?: string | undefined;
  invalid?: boolean | undefined;
  items: Array<AutocompleteOption | string>;
  label?: string | undefined;
  labelAccessory?: Snippet | undefined;
  labelProps?: ComponentProps<typeof FieldShell>["labelProps"];
  name?: string | undefined;
  onBlur?: (() => void) | undefined;
  onValueChange?: ((value: string) => void) | undefined;
  orientation?: ComponentProps<typeof FieldShell>["orientation"];
  value?: string | undefined;
};

let {
  class: className,
  description,
  error,
  id,
  invalid,
  items,
  label,
  labelAccessory,
  labelProps,
  name,
  onBlur,
  onValueChange,
  orientation,
  value,
  ...autocompleteProps
}: Props = $props();

const autocompleteValue = $derived(
  value !== undefined ? (value ? [value] : []) : undefined,
);

function handleValueChange(nextValue: string[]) {
  onValueChange?.(nextValue.at(0) ?? "");
}
</script>

<FieldShell
  class={className}
  {description}
  {error}
  {id}
  {invalid}
  {label}
  {labelAccessory}
  {labelProps}
  {orientation}
>
  <Autocomplete
    {...autocompleteProps}
    {id}
    {invalid}
    {items}
    {name}
    onFocusOutside={onBlur}
    onValueChange={handleValueChange}
    value={autocompleteValue}
  />
</FieldShell>
