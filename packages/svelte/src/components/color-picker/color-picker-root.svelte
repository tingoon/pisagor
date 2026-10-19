<script lang="ts">
  import {
    ColorPicker as ColorPickerPrimitive,
    type ColorPickerRootProps as ArkRootProps,
    parseColor,
  } from "@ark-ui/svelte";
  import type { ColorPickerRootContract } from "@pisagor/contracts";

  import { withProvider } from "./color-picker.context";

  type Props = Omit<
    ArkRootProps,
    "defaultValue" | "value" | "onValueChange"
  > & {
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    value?: string;
  } & ColorPickerRootContract;

  let {
    positioning = { placement: "top-start" },
    defaultValue,
    value = $bindable(defaultValue),
    children,
    onValueChange,
    ...rest
  }: Props = $props();

  const root = withProvider(
    () => ({
      ...rest,
      positioning,
    }),
    { name: "Root" },
  );

  const parsed = $derived(value ? parseColor(value) : undefined);

  function handleValueChange(details: { valueAsString: string }) {
    value = details.valueAsString;
    onValueChange?.(details.valueAsString);
  }
</script>

<ColorPickerPrimitive.Root
  {...root.props}
  onValueChange={handleValueChange}
  value={parsed}
>
  {@render children?.()}
  <ColorPickerPrimitive.HiddenInput />
</ColorPickerPrimitive.Root>
