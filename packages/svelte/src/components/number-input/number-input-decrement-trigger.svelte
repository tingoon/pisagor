<script lang="ts">
  import {
    NumberInput as NumberInputPrimitive,
    type NumberInputDecrementTriggerProps,
  } from "@ark-ui/svelte";
  import { cn } from "@pisagor/utils";
  import { MinusIcon } from "phosphor-svelte";
  import Button from "../button.svelte";
  import { useLocale } from "../provider/context";
  import { useStyles } from "./number-input.context";

  const { m } = useLocale();

  let {
    class: className,
    ...rest
  }: Omit<NumberInputDecrementTriggerProps, "asChild" | "children"> = $props();

  const styles = useStyles();
</script>

<NumberInputPrimitive.DecrementTrigger {...rest}>
  {#snippet asChild(props)}
    <Button
      {...props({
        class: styles.slots.decrementTrigger({ class: cn(className) }),
      })}
      aria-label={m("numberInput.decrement")}
      variant="ghost"
    >
      <MinusIcon aria-hidden="true" />
    </Button>
  {/snippet}
</NumberInputPrimitive.DecrementTrigger>
