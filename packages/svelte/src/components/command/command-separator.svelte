<script lang="ts">
  import { cn } from "@pisagor/utils";
  import type { ComponentProps } from "svelte";
  import Separator from "../separator.svelte";
  import { useStyles } from "./command.context";

  let { class: className, ...rest }: ComponentProps<typeof Separator> =
    $props();
  const styles = useStyles();
  const slots = $derived(styles.slots);
</script>

<Separator
  {...rest}
  class={slots.separator({ class: cn(className) })}
  data-part="separator"
  data-scope="command"
/>
