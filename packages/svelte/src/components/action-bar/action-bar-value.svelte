<script lang="ts">
import { cn } from "@pisagor/utils";
import type { ComponentProps } from "svelte";
import { Badge } from "../badge";
import { useActionBar } from "./action-bar.context";

type Props = Omit<ComponentProps<typeof Badge>, "variant"> & {
  count?: number;
  label?: string;
};

let { count = 0, children, label, class: className, ...rest }: Props = $props();
const ctx = useActionBar();
</script>

<Badge
  {...rest}
  class={ctx.slots.value({ class: cn(className) })}
  data-part="value"
  data-scope="action-bar"
  variant="secondary"
>
  {#if children}
    {@render children()}
  {:else}
    {label ?? count}
  {/if}
</Badge>
