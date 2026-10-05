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
  as="tr"
  {...rest}
  class={slots.row({ class: cn(className) })}
  data-part="row"
  data-scope="table"
>
  {@render children?.()}
</Ark>
