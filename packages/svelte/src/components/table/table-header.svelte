<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";
import { useTable } from "./table.context";

let {
  class: className,
  children,
  ...rest
}: HTMLAttributes<HTMLElement> = $props();
const { slots } = useTable();
</script>

<Ark
  as="thead"
  {...rest}
  class={slots.header({ class: cn(className) })}
  data-part="header"
  data-scope="table"
>
  {@render children?.()}
</Ark>
