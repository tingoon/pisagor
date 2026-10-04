<script lang="ts">
import { Slider } from "@pisagor/svelte";
import type { ComponentProps, Snippet } from "svelte";
import FieldShell from "../../internal/field-shell.svelte";

type SliderProps = ComponentProps<typeof Slider>;

type Props = Omit<SliderProps, "invalid" | "label" | "name" | "children"> & {
  class?: string | undefined;
  description?: string | undefined;
  error?: string | undefined;
  id?: string | undefined;
  invalid?: boolean | undefined;
  label?: string | undefined;
  labelAccessory?: Snippet | undefined;
  labelProps?: ComponentProps<typeof FieldShell>["labelProps"];
  name?: string | undefined;
  onBlur?: (() => void) | undefined;
};

let {
  class: className,
  description,
  error,
  id,
  invalid,
  label,
  labelAccessory,
  labelProps,
  name,
  onBlur,
  onValueChange,
  ...sliderProps
}: Props = $props();
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
>
  <Slider
    {...sliderProps}
    {id}
    {invalid}
    {name}
    onblur={onBlur}
    {onValueChange}
  />
</FieldShell>
