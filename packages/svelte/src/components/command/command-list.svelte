<script lang="ts">
  import { cn } from "@pisagor/utils";
  import type { ComponentProps } from "svelte";
  import ComboboxList from "../combobox/combobox-list.svelte";
  import { useStyles } from "./command.context";

  let { class: className, ...rest }: ComponentProps<typeof ComboboxList> =
    $props();
  const styles = useStyles();
  const slots = $derived(styles.slots);
</script>

<ComboboxList {...rest} class={slots.list({ class: cn(className) })} />
