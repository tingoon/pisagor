<script lang="ts">
  import { Checkbox as CheckboxPrimitive } from "@ark-ui/svelte";
  import type { CheckboxRootProps } from "@ark-ui/svelte";
  import type {
    CheckboxContract,
    CheckboxRootContract,
  } from "@pisagor/contracts";
  import { CheckIcon, MinusIcon } from "phosphor-svelte";
  import type { Snippet } from "svelte";
  import CheckboxControl from "./checkbox-control.svelte";
  import CheckboxIndicator from "./checkbox-indicator.svelte";
  import CheckboxLabel from "./checkbox-label.svelte";
  import CheckboxRoot from "./checkbox-root.svelte";

  type Props = Omit<CheckboxRootProps, "children"> &
    CheckboxRootContract &
    CheckboxContract & {
      /** Visible label rendered next to the control. */
      label?: string | Snippet;
      onValueChange?: (value: boolean) => void;
      /** Forwarded to the hidden input (Svelte DOM attr). */
      tabindex?: number | null;
    };

  let {
    classNames,
    label,
    tabindex,
    onCheckedChange,
    onValueChange,
    ...rest
  }: Props = $props();

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
  <CheckboxControl class={classNames?.base}>
    <CheckboxIndicator class={classNames?.indicator}>
      <CheckIcon />
    </CheckboxIndicator>
    <CheckboxIndicator class={classNames?.indicator} indeterminate>
      <MinusIcon />
    </CheckboxIndicator>
  </CheckboxControl>
  {#if label != null}
    <CheckboxLabel class={classNames?.label}>
      {#if typeof label === "string"}
        {label}
      {:else}
        {@render label()}
      {/if}
    </CheckboxLabel>
  {/if}
  <CheckboxPrimitive.HiddenInput {tabindex} />
</CheckboxRoot>
