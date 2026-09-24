<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { cn } from "@pisagor/utils";
import type { Snippet } from "svelte";
import type { HTMLAnchorAttributes } from "svelte/elements";
import { useNavigationMenu } from "./navigation-menu.context";

type Props = Omit<HTMLAnchorAttributes, "class"> & {
  active?: boolean;
  children?: Snippet;
  class?: string | undefined;
};

let { active = false, class: className, children, ...rest }: Props = $props();
const { slots } = useNavigationMenu();
</script>

<Ark
  as="a"
  {...rest}
  aria-current={active ? "page" : undefined}
  class={slots.link({ class: cn(className) })}
  data-active={active ? "" : undefined}
  data-part="link"
  data-scope="navigation-menu"
>
  {@render children?.()}
</Ark>
