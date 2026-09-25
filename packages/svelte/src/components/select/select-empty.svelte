<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { Select as SelectPrimitive } from "@ark-ui/svelte/select";
import { selectRecipe } from "@pisagor/recipes/select";
import { cn } from "@pisagor/utils";
import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
import { useSelectRoot } from "./select.context";

type Props = Omit<HTMLAttributes<HTMLDivElement>, "class"> & {
  children?: Snippet;
  class?: string | undefined;
};

let { class: className, children, ...rest }: Props = $props();
const ctx = useSelectRoot();
const slots = $derived(ctx?.slots ?? selectRecipe());
</script>

<SelectPrimitive.Context>
  {#snippet render(
  select,
)}
    {#if select().empty}
      <Ark as="div" {...rest} class={slots.empty({ class: cn(className) })} role="presentation">
        {@render children?.()}
      </Ark>
    {/if}
  {/snippet}
</SelectPrimitive.Context>
