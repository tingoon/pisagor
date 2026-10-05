<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { HTMLAnchorAttributes } from "svelte/elements";
import { useLinkBox } from "./link-box.context";

type Props = Omit<HTMLAnchorAttributes, "class"> & {
  children?: import("svelte").Snippet;
  class?: string | undefined;
};

let { children, class: className, ...rest }: Props = $props();

const { slots } = useLinkBox();
</script>

<Ark
  as="a"
  {...rest}
  class={slots.overlay({ class: className })}
  data-part="overlay"
  data-scope="link-box"
>
  {@render children?.()}
</Ark>
