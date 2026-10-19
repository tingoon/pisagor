<script lang="ts">
  import { Checkbox as CheckboxPrimitive } from "@ark-ui/svelte";
  import type { CheckboxRootProps } from "@ark-ui/svelte";
  import type { CheckboxRootContract } from "@pisagor/contracts";

  import CheckboxControl from "./checkbox-control.svelte";
  import CheckboxRoot from "./checkbox-root.svelte";

  type Props = CheckboxRootProps &
    CheckboxRootContract & {
      onValueChange?: (value: boolean) => void;
      /** Forwarded to the hidden input (Svelte DOM attr). */
      tabindex?: number | null;
    };

  let { tabindex, onCheckedChange, onValueChange, ...rest }: Props = $props();

  function handleCheckedChange(
    details: Parameters<NonNullable<CheckboxRootProps["onCheckedChange"]>>[0],
  ) {
    onCheckedChange?.(details);
    onValueChange?.(details.checked === true);
  }
</script>

<CheckboxRoot
  {...rest}
  onCheckedChange={onCheckedChange || onValueChange
    ? handleCheckedChange
    : undefined}
>
  <CheckboxControl />
  <CheckboxPrimitive.HiddenInput {tabindex} />
</CheckboxRoot>
