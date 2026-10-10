<script lang="ts">
import { cn } from "@pisagor/utils";
import type { ComponentProps } from "svelte";
import ComboboxList from "../combobox/combobox-list.svelte";
import { useCommand } from "./command.context";

let {
  class: className,
  children,
  ...rest
}: ComponentProps<typeof ComboboxList> = $props();
const styles = useCommand();
const slots = $derived(styles.slots);
</script>

<div class={slots.listWrapper()}>
  <ComboboxList {...rest} class={slots.list({ class: cn(className) })}>
    {@render children?.()}
  </ComboboxList>
</div>
