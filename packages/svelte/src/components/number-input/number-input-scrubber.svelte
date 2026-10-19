<script lang="ts">
  import {
    NumberInput as NumberInputPrimitive,
    type NumberInputScrubberProps,
  } from "@ark-ui/svelte";
  import { fieldRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import { useStyles } from "./number-input.context";

  let {
    children,
    class: className,
    ...rest
  }: NumberInputScrubberProps = $props();

  const styles = useStyles();
</script>

<NumberInputPrimitive.Scrubber {...rest}>
  {#snippet asChild(props)}
    <NumberInputPrimitive.Label
      {...props({
        class: cn(
          styles.slots.scrubber({ class: cn(className) }),
          fieldRecipe().label(),
        ),
      })}
    >
      {@render children?.()}
    </NumberInputPrimitive.Label>
  {/snippet}
</NumberInputPrimitive.Scrubber>
