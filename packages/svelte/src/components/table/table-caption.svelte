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
  as="caption"
  {...rest}
  class={slots.caption({ class: className })}
  data-part="caption"
  data-scope="table"
>
  {@render children?.()}
</Ark>
