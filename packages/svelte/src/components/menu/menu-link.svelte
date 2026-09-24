<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { cn } from "@pisagor/utils";
import type { Snippet } from "svelte";
import type { HTMLAnchorAttributes } from "svelte/elements";
import { useMenu } from "./menu.context";

type Props = Omit<HTMLAnchorAttributes, "class"> & {
  active?: boolean;
  children?: Snippet;
  class?: string | undefined;
};

let { active = false, class: className, children, ...rest }: Props = $props();
const { slots } = useMenu();
</script>

<Ark as="li" class={slots.wrapper()} data-part="item-wrapper" data-scope="menu" role="none">
  <Ark
    as="a"
    {...rest}
    aria-current={active ? "page" : undefined}
    class={slots.link({ class: cn(className) })}
    data-active={active ? "" : undefined}
    data-part="link"
    data-scope="menu"
  >
    {@render children?.()}
  </Ark>
</Ark>
