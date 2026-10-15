<script lang="ts">
import type { ComponentProps } from "svelte";
import { InputGroup } from "../input-group";
import ColorPickerArea from "./color-picker-area.svelte";
import ColorPickerClearTrigger from "./color-picker-clear-trigger.svelte";
import ColorPickerContent from "./color-picker-content.svelte";
import ColorPickerControl from "./color-picker-control.svelte";
import ColorPickerFieldView from "./color-picker-field-view.svelte";
import ColorPickerInput from "./color-picker-input.svelte";
import ColorPickerRoot from "./color-picker-root.svelte";
import ColorPickerSwatchPreview from "./color-picker-swatch-preview.svelte";
import ColorPickerTrigger from "./color-picker-trigger.svelte";

type Props = Omit<ComponentProps<typeof ColorPickerRoot>, "children"> & {
  clearable?: boolean;
  /** Visual shell variant of the input group. */
  variant?: "primary" | "secondary";
};

let { clearable = false, variant, ...rest }: Props = $props();
</script>

<ColorPickerRoot {...rest}>
  <ColorPickerControl>
    <InputGroup {variant}>
      <ColorPickerTrigger>
        <InputGroup.Addon>
          <ColorPickerSwatchPreview />
        </InputGroup.Addon>
      </ColorPickerTrigger>
      <ColorPickerInput channel="hex" />
      {#if clearable}
        <ColorPickerClearTrigger clearable />
      {/if}
    </InputGroup>
  </ColorPickerControl>
  <ColorPickerContent>
    <ColorPickerArea />
    <ColorPickerFieldView />
  </ColorPickerContent>
</ColorPickerRoot>
