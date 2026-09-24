<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { cn } from "@pisagor/utils";
import type { HTMLThAttributes } from "svelte/elements";
import { useTable } from "./table.context";

type Props = Omit<HTMLThAttributes, "class"> & {
  class?: string | undefined;
};

let { class: className, children, ...rest }: Props = $props();
const { slots } = useTable();
</script>

<Ark
  as="th"
  {...rest}
  class={slots.head({ class: cn(className) })}
  data-part="head"
  data-scope="table"
>
  {@render children?.()}
</Ark>
