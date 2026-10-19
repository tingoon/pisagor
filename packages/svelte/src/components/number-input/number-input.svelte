<script lang="ts">
  import type { NumberInputRootProps } from "@ark-ui/svelte";
  import type { NumberInputRootContract } from "@pisagor/contracts";
  import type { Snippet } from "svelte";

  import NumberInputClearTrigger from "./number-input-clear-trigger.svelte";
  import NumberInputControl from "./number-input-control.svelte";
  import NumberInputDecrementTrigger from "./number-input-decrement-trigger.svelte";
  import NumberInputIncrementTrigger from "./number-input-increment-trigger.svelte";
  import NumberInputInput from "./number-input-input.svelte";
  import NumberInputRoot from "./number-input-root.svelte";

  type Props = Omit<NumberInputRootProps, "children" | "onValueChange"> &
    NumberInputRootContract & {
      children?: Snippet;
      /**
       * Whether to show a clear button when the input has a value.
       *
       * @defaultValue false
       */
      clearable?: boolean;
      onValueChange?: (value: number) => void;
      /** Placeholder text for the auto-rendered input */
      placeholder?: string | null | undefined;
    };

  let { clearable = false, children, placeholder, ...rest }: Props = $props();
</script>

<NumberInputRoot {...rest}>
  {#if children}
    {@render children()}
  {:else}
    <NumberInputControl {clearable}>
      <NumberInputDecrementTrigger />
      <NumberInputInput {placeholder} />
      {#if clearable}
        <NumberInputClearTrigger />
      {/if}
      <NumberInputIncrementTrigger />
    </NumberInputControl>
  {/if}
</NumberInputRoot>
