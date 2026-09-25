<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { cn } from "@pisagor/utils";
import type { HTMLTdAttributes } from "svelte/elements";
import { useTable } from "./table.context";

type Props = Omit<HTMLTdAttributes, "class"> & {
  class?: string | undefined;
  colspan?: number | string | undefined | null;
  colSpan?: number | string | undefined | null;
};

let { class: className, children, ...rest }: Props = $props();
const { slots } = useTable();
</script>

<Ark
  as="td"
  {...rest}
  class={slots.cell({ class: cn(className) })}
  data-part="cell"
  data-scope="table"
>
  {@render children?.()}
</Ark>
