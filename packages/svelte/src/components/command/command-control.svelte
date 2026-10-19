<script lang="ts">
  import { cn } from "@pisagor/utils";
  import type { ComponentProps } from "svelte";
  import ComboboxControl from "../combobox/combobox-control.svelte";
  import { useStyles } from "./command.context";

  let { class: className, ...rest }: ComponentProps<typeof ComboboxControl> =
    $props();
  const styles = useStyles();
  const slots = $derived(styles.slots);
</script>

<ComboboxControl {...rest} class={slots.control({ class: cn(className) })} />
