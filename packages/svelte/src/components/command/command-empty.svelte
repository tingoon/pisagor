<script lang="ts">
import { cn } from "@pisagor/utils";
import type { ComponentProps } from "svelte";
import ComboboxEmpty from "../combobox/combobox-empty.svelte";
import { useMessageResolver } from "../provider/context";
import { useCommand } from "./command.context";

let {
  children,
  class: className,
  ...rest
}: ComponentProps<typeof ComboboxEmpty> = $props();
const t = useMessageResolver();
const styles = useCommand();
const slots = $derived(styles.slots);
</script>

<ComboboxEmpty {...rest} class={slots.empty({ class: cn(className) })}>
  {#if children}
    {@render children()}
  {:else}
    {t("command.empty")}
  {/if}
</ComboboxEmpty>
