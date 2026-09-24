<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { cn } from "@pisagor/utils";
import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
import { useNavigationMenu } from "./navigation-menu.context";

type Props = Omit<HTMLAttributes<HTMLUListElement>, "class"> & {
  children?: Snippet;
  class?: string | undefined;
};

let { class: className, children, ...rest }: Props = $props();
const { slots } = useNavigationMenu();
</script>

<Ark
  as="ul"
  {...rest}
  class={slots.list({ class: cn(className) })}
  data-part="list"
  data-scope="navigation-menu"
>
  {@render children?.()}
</Ark>
