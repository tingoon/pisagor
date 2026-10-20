<script lang="ts">
  import type { NumberInputContract } from "@pisagor/contracts";
  import { MinusIcon, PlusIcon } from "phosphor-svelte";
  import type { ComponentProps, Snippet } from "svelte";
  import Button from "../button.svelte";
  import { Field } from "../field";
  import { Input as TextInput } from "../input";
  import NumberInputClearTrigger from "./number-input-clear-trigger.svelte";
  import NumberInputControl from "./number-input-control.svelte";
  import NumberInputDecrementTrigger from "./number-input-decrement-trigger.svelte";
  import NumberInputIncrementTrigger from "./number-input-increment-trigger.svelte";
  import NumberInputInput from "./number-input-input.svelte";
  import NumberInputLabel from "./number-input-label.svelte";
  import NumberInputRoot from "./number-input-root.svelte";
  import NumberInputScrubber from "./number-input-scrubber.svelte";

  type Props = Omit<ComponentProps<typeof NumberInputRoot>, "children"> &
    NumberInputContract & {
      /**
       * Whether to show a clear button when the input has a value.
       *
       * @defaultValue false
       */
      clearable?: boolean;
      /** Props forwarded to the text input. */
      inputProps?: Record<string, unknown>;
      /** Scrubbable label rendered above the control. */
      label?: Snippet | string;
      /** Placeholder text for the input. */
      placeholder?: string | null;
      /**
       * Whether to render the decrement and increment buttons.
       *
       * @defaultValue true
       */
      showTriggers?: boolean;
    };

  let {
    classNames,
    clearable = false,
    inputProps,
    label,
    placeholder,
    showTriggers = true,
    ...rest
  }: Props = $props();
</script>

<NumberInputRoot {...rest}>
  {#if label !== undefined}
    <NumberInputScrubber class={classNames?.scrubber}>
      {#snippet asChild(scrubberProps)}
        <NumberInputLabel {...scrubberProps()}>
          {#snippet asChild(labelProps)}
            <Field.Label {...labelProps()}>
              {#if typeof label === "string"}
                {label}
              {:else}
                {@render label?.()}
              {/if}
            </Field.Label>
          {/snippet}
        </NumberInputLabel>
      {/snippet}
    </NumberInputScrubber>
  {/if}
  <NumberInputControl
    class={classNames?.control}
    data-clearable={clearable || undefined}
  >
    {#if showTriggers}
      <NumberInputDecrementTrigger class={classNames?.decrementTrigger}>
        {#snippet asChild(props)}
          <Button {...props()} variant="ghost">
            <MinusIcon aria-hidden="true" />
          </Button>
        {/snippet}
      </NumberInputDecrementTrigger>
    {/if}
    <NumberInputInput class={classNames?.input}>
      {#snippet asChild(props)}
        <TextInput {...props(inputProps)} {placeholder} />
      {/snippet}
    </NumberInputInput>
    {#if clearable}
      <NumberInputClearTrigger class={classNames?.clearTrigger} />
    {/if}
    {#if showTriggers}
      <NumberInputIncrementTrigger class={classNames?.incrementTrigger}>
        {#snippet asChild(props)}
          <Button {...props()} variant="ghost">
            <PlusIcon aria-hidden="true" />
          </Button>
        {/snippet}
      </NumberInputIncrementTrigger>
    {/if}
  </NumberInputControl>
</NumberInputRoot>
