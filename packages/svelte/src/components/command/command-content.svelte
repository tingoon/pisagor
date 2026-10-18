<script lang="ts">
  import { cn } from "@pisagor/utils";
  import type { ComponentProps } from "svelte";
  import ComboboxContent from "../combobox/combobox-content.svelte";
  import { useStyles } from "./command.context";

  let { class: className, ...rest }: ComponentProps<typeof ComboboxContent> =
    $props();
  const styles = useStyles();
  const slots = $derived(styles.slots);
</script>

<ComboboxContent
  {...rest}
  class={slots.content({ class: cn(className) })}
  portalled={false}
/>
