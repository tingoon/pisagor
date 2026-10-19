<script lang="ts">
  import {
    Clipboard as ClipboardPrimitive,
    type ClipboardLabelProps,
    type ClipboardRootProps,
  } from "@ark-ui/svelte";
  import type {
    ButtonRootContract,
    ClipboardContract,
    ClipboardRootContract,
  } from "@pisagor/contracts";
  import { CheckIcon, ClipboardIcon } from "phosphor-svelte";
  import type { Snippet } from "svelte";
  import Button from "../button.svelte";
  import { useLocale } from "../provider/context";
  import ClipboardControl from "./clipboard-control.svelte";
  import ClipboardField from "./clipboard-field.svelte";
  import ClipboardIndicator from "./clipboard-indicator.svelte";
  import ClipboardInput from "./clipboard-input.svelte";
  import ClipboardLabel from "./clipboard-label.svelte";
  import ClipboardRoot from "./clipboard-root.svelte";
  import ClipboardValueText from "./clipboard-value-text.svelte";

  const { m } = useLocale();

  type Props = Omit<ClipboardRootProps, "children" | "variant"> &
    Omit<ClipboardRootContract, "variant"> &
    ClipboardContract & {
      copiedIcon?: Snippet;
      copyIcon?: Snippet;
      label?: string;
      /** Extra props forwarded to the label element */
      labelProps?: Omit<ClipboardLabelProps, "children" | "class">;
    };

  let {
    size = "md",
    buttonSize: buttonSizeProp,
    buttonVariant,
    controlVariant,
    valueSize: valueSizeProp,
    variant: displayVariant = "input",
    buttonAriaLabel: buttonAriaLabelProp,
    copiedIcon,
    copyIcon,
    label,
    labelProps,
    recipe,
    class: className,
    classNames,
    ...rest
  }: Props = $props();

  const buttonSize = $derived(
    buttonSizeProp ?? (`icon-${size}` as ButtonRootContract["size"]),
  );
  const valueSize = $derived(valueSizeProp ?? size);
  const buttonAriaLabel = $derived(m("clipboard.copy", buttonAriaLabelProp));
</script>

{#snippet control()}
  <ClipboardControl class={classNames?.control}>
    {#if displayVariant === "input"}
      <ClipboardInput class={classNames?.input} readonly />
    {/if}
    {#if displayVariant === "value"}
      <ClipboardValueText class={classNames?.valueText} />
    {/if}
    <ClipboardPrimitive.Trigger>
      {#snippet asChild(props)}
        <Button
          {...props()}
          aria-label={buttonAriaLabel}
          size={buttonSize}
          type="button"
          variant={buttonVariant}
        >
          <ClipboardIndicator class={classNames?.indicator}>
            {#snippet copied()}
              {#if copiedIcon}
                {@render copiedIcon()}
              {:else}
                <CheckIcon />
              {/if}
            {/snippet}
            {#if copyIcon}
              {@render copyIcon()}
            {:else}
              <ClipboardIcon />
            {/if}
          </ClipboardIndicator>
        </Button>
      {/snippet}
    </ClipboardPrimitive.Trigger>
  </ClipboardControl>
{/snippet}

<ClipboardRoot
  {...rest}
  class={className}
  {recipe}
  {size}
  {valueSize}
  variant={controlVariant}
>
  {#if label}
    <ClipboardField class={classNames?.field}>
      <ClipboardLabel {...labelProps} class={classNames?.label}>
        {label}
      </ClipboardLabel>
      {@render control()}
    </ClipboardField>
  {:else}
    {@render control()}
  {/if}
</ClipboardRoot>
