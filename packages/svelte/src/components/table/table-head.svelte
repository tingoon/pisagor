<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
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
  class={slots.head({ class: className })}
  data-part="head"
  data-scope="table"
>
  {@render children?.()}
</Ark>
