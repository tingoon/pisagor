<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";
import { useCard } from "./card.context";
import CardDescription from "./card-description.svelte";
import CardTitle from "./card-title.svelte";

type Props = Omit<HTMLAttributes<HTMLDivElement>, "class"> & {
  children?: import("svelte").Snippet;
  class?: string | undefined;
  description?: string;
  title?: string;
};

let { children, description, title, class: className, ...rest }: Props = $props();

const { slots } = useCard();
</script>

<Ark
  as="div"
  {...rest}
  class={slots.header({ class: cn(className) })}
  data-part="header"
  data-scope="card"
>
  {#if title}
    <CardTitle>{title}</CardTitle>
  {/if}

  {#if description}
    <CardDescription>{description}</CardDescription>
  {/if}

  {@render children?.()}
</Ark>
