<script lang="ts">
  import {
    Listbox as ListboxPrimitive,
    type ListboxEmptyProps,
  } from "@ark-ui/svelte";
  import { cn } from "@pisagor/utils";
  import { useLocale } from "../provider/context";
  import { useStyles } from "./listbox.context";

  let { class: className, children, ...rest }: ListboxEmptyProps = $props();
  const styles = useStyles();
  const { m } = useLocale();
  const slots = $derived(styles.slots);
</script>

<ListboxPrimitive.Empty {...rest} class={slots.empty({ class: cn(className) })}>
  {#if children}
    {@render children()}
  {:else}
    {m("listbox.empty")}
  {/if}
</ListboxPrimitive.Empty>
