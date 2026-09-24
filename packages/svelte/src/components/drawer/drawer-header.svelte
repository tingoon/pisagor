<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { cn } from "@pisagor/utils";
import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
import { useDrawer } from "./drawer.context";
import DrawerDescription from "./drawer-description.svelte";
import DrawerTitle from "./drawer-title.svelte";

type Props = Omit<HTMLAttributes<HTMLDivElement>, "class" | "title"> & {
  children?: Snippet;
  class?: string | undefined;
  description?: string;
  title?: string;
};

let { children, description, title, class: className, ...rest }: Props = $props();
const { slots } = useDrawer();
</script>

<Ark
  as="div"
  {...rest}
  class={slots.header({ class: cn(className) })}
  data-part="header"
  data-scope="drawer"
>
  {#if title}
    <DrawerTitle>{title}</DrawerTitle>
  {/if}
  {#if description}
    <DrawerDescription>{description}</DrawerDescription>
  {/if}
  {@render children?.()}
</Ark>
