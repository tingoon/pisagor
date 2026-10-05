<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { HTMLAttributes } from "svelte/elements";
import { useToolbar } from "./toolbar.context";

type Props = Omit<HTMLAttributes<HTMLElement>, "class"> & {
  class?: string | undefined;
};
let { class: className, children, ...rest }: Props = $props();
const { slots } = useToolbar();
</script>

<Ark
  as="div"
  {...rest}
  class={slots.heading({ class: className })}
  data-part="heading"
  data-scope="toolbar"
>
  {@render children?.()}
</Ark>
