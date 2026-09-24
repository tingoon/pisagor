<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";
import { useBottomNavigationItem } from "./bottom-navigation.context";

type Props = Omit<HTMLAttributes<HTMLSpanElement>, "class"> & { class?: string | undefined };
let { class: className, children, ...rest }: Props = $props();
const { slots } = useBottomNavigationItem();
</script>

<Ark
  as="span"
  {...rest}
  class={slots.label({ class: cn(className) })}
  data-part="item-label"
  data-scope="bottom-navigation"
>
  {@render children?.()}
</Ark>
