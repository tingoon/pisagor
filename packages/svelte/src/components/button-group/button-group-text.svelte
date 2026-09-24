<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";
import { useButtonGroup } from "./button-group.context";

type Props = Omit<HTMLAttributes<HTMLDivElement>, "class"> & {
  children?: import("svelte").Snippet;
  class?: string | undefined;
};

let { children, class: className, ...rest }: Props = $props();

const { slots } = useButtonGroup();
</script>

<Ark
  as="div"
  {...rest}
  class={slots.text({ class: cn(className) })}
  data-part="text"
  data-scope="button-group"
>
  {@render children?.()}
</Ark>
