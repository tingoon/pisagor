<script lang="ts">
  import { cn } from "@pisagor/utils";
  import type { ComponentProps } from "svelte";
  import ComboboxEmpty from "../combobox/combobox-empty.svelte";
  import { useStyles } from "./command.context";

  let { class: className, ...rest }: ComponentProps<typeof ComboboxEmpty> =
    $props();
  const styles = useStyles();
  const slots = $derived(styles.slots);
</script>

<ComboboxEmpty {...rest} class={slots.empty({ class: cn(className) })} />
