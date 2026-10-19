<script lang="ts">
  import {
    NumberInput as NumberInputPrimitive,
    type NumberInputIncrementTriggerProps,
  } from "@ark-ui/svelte";
  import { cn } from "@pisagor/utils";
  import { PlusIcon } from "phosphor-svelte";
  import Button from "../button.svelte";
  import { useLocale } from "../provider/context";
  import { useStyles } from "./number-input.context";

  const { m } = useLocale();

  let {
    class: className,
    ...rest
  }: Omit<NumberInputIncrementTriggerProps, "asChild" | "children"> = $props();

  const styles = useStyles();
</script>

<NumberInputPrimitive.IncrementTrigger {...rest}>
  {#snippet asChild(props)}
    <Button
      {...props({
        class: styles.slots.incrementTrigger({ class: cn(className) }),
      })}
      aria-label={m("numberInput.increment")}
      variant="ghost"
    >
      <PlusIcon aria-hidden="true" />
    </Button>
  {/snippet}
</NumberInputPrimitive.IncrementTrigger>
