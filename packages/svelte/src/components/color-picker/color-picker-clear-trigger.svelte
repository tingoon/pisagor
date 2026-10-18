<script lang="ts">
  import { parseColor, useColorPickerContext } from "@ark-ui/svelte";
  import { XIcon } from "phosphor-svelte";
  import type { ClassValue } from "svelte/elements";
  import { InputGroup } from "../input-group";
  import { useLocale } from "../provider/context";

  const { m } = useLocale();

  type Props = {
    class?: ClassValue;
    clearable?: boolean;
  };
  let { clearable = false, class: className }: Props = $props();
  const api = useColorPickerContext();

  const visible = $derived.by(() => {
    if (!clearable) return false;
    const controlProps = api().getControlProps() as {
      disabled?: boolean;
      readOnly?: boolean;
    };
    if (controlProps.disabled || controlProps.readOnly) return false;
    return api().value.getChannelValue("alpha") !== 0;
  });

  function clear() {
    api().setValue(parseColor("rgba(0, 0, 0, 0)"));
  }
</script>

{#if visible}
  <InputGroup.Addon align="inline-end">
    <InputGroup.Button
      aria-label={m("colorPicker.clearColor")}
      class={className}
      data-part="clear-trigger"
      data-scope="color-picker"
      onclick={clear}
      size="icon-xs"
      type="button"
      variant="ghost"
    >
      <XIcon />
    </InputGroup.Button>
  </InputGroup.Addon>
{/if}
