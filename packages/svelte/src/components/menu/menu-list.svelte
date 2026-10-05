<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
import { useMenu } from "./menu.context";

type Props = Omit<HTMLAttributes<HTMLUListElement>, "class"> & {
  children?: Snippet;
  class?: string | undefined;
};

let { class: className, children, ...rest }: Props = $props();
const { slots } = useMenu();
</script>

<Ark
  as="ul"
  {...rest}
  class={slots.list({ class: className })}
  data-part="list"
  data-scope="menu"
>
  {@render children?.()}
</Ark>
