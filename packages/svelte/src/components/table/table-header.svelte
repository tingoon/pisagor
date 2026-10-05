<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { HTMLAttributes } from "svelte/elements";
import { useTable } from "./table.context";

type Props = Omit<HTMLAttributes<HTMLElement>, "class"> & {
  class?: string | undefined;
};

let { class: className, children, ...rest }: Props = $props();
const { slots } = useTable();
</script>

<Ark
  as="thead"
  {...rest}
  class={slots.header({ class: className })}
  data-part="header"
  data-scope="table"
>
  {@render children?.()}
</Ark>
