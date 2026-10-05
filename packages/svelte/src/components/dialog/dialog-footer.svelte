<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { HTMLAttributes } from "svelte/elements";
import { useDialog } from "./dialog.context";

type Props = Omit<HTMLAttributes<HTMLDivElement>, "class"> & {
  children?: import("svelte").Snippet;
  class?: string | undefined;
};

let { children, class: className, ...rest }: Props = $props();
const { slots } = useDialog();
</script>

<Ark
  as="div"
  {...rest}
  class={slots.footer({ class: className })}
  data-part="footer"
  data-scope="dialog"
>
  {@render children?.()}
</Ark>
