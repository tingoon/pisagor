<script lang="ts">
  import type { InputOtpContract } from "@pisagor/contracts";
  import type { ComponentProps } from "svelte";
  import InputOTPControl from "./input-otp-control.svelte";
  import InputOTPInput from "./input-otp-input.svelte";
  import InputOTPRoot from "./input-otp-root.svelte";
  import InputOTPSeparator from "./input-otp-separator.svelte";

  type Props = Omit<ComponentProps<typeof InputOTPRoot>, "children"> &
    InputOtpContract & {
      /** Insert a separator after every `groupSize` slots. */
      groupSize?: number;
      /**
       * Number of input slots.
       *
       * @defaultValue 6
       */
      length?: number;
    };

  let { classNames, groupSize, length = 6, ...rest }: Props = $props();
  const indexes = $derived(Array.from({ length }, (_, index) => index));
</script>

<InputOTPRoot {...rest}>
  <InputOTPControl class={classNames?.control}>
    {#each indexes as index (index)}
      {#if groupSize !== undefined && index > 0 && index % groupSize === 0}
        <InputOTPSeparator class={classNames?.separator} />
      {/if}
      <InputOTPInput class={classNames?.input} {index} />
    {/each}
  </InputOTPControl>
</InputOTPRoot>
