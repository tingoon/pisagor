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
  class={slots.actions({ class: cn(className) })}
  data-part="actions"
  data-scope="toolbar"
>
  {@render children?.()}
</Ark>
