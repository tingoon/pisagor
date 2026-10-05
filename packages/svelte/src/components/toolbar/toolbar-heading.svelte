<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";
import { useToolbar } from "./toolbar.context";

let {
  class: className,
  children,
  ...rest
}: HTMLAttributes<HTMLElement> = $props();
const { slots } = useToolbar();
</script>

<Ark
  as="div"
  {...rest}
  class={slots.heading({ class: cn(className) })}
  data-part="heading"
  data-scope="toolbar"
>
  {@render children?.()}
</Ark>
