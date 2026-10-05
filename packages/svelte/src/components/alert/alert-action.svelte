<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { HTMLAttributes } from "svelte/elements";
import { useAlert } from "./alert.context";

type Props = Omit<HTMLAttributes<HTMLDivElement>, "class"> & {
  children?: import("svelte").Snippet;
  class?: string | undefined;
};

let { children, class: className, ...rest }: Props = $props();

const { slots } = useAlert();
</script>

<Ark
  as="div"
  {...rest}
  class={slots.action({ class: className })}
  data-part="action"
  data-scope="alert"
>
  {@render children?.()}
</Ark>
