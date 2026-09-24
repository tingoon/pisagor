<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { cn } from "@pisagor/utils";
import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
import { useNavigationMenu } from "./navigation-menu.context";

type Props = Omit<HTMLAttributes<HTMLLIElement>, "class"> & {
  children?: Snippet;
  class?: string | undefined;
};

let { class: className, children, ...rest }: Props = $props();
const { slots } = useNavigationMenu();
</script>

<Ark
  as="li"
  {...rest}
  class={slots.item({ class: cn(className) })}
  data-part="item"
  data-scope="navigation-menu"
>
  {@render children?.()}
</Ark>
