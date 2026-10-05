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
  as="tr"
  {...rest}
  class={slots.row({ class: className })}
  data-part="row"
  data-scope="table"
>
  {@render children?.()}
</Ark>
