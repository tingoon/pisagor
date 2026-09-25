<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { cn } from "@pisagor/utils";
import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
import { useMenu } from "./menu.context";

type Props = Omit<HTMLAttributes<HTMLSpanElement>, "class"> & {
  children?: Snippet;
  class?: string | undefined;
};

let { class: className, children, ...rest }: Props = $props();
const { slots } = useMenu();
</script>

<Ark
  as="span"
  {...rest}
  class={slots.shortcut({ class: cn(className) })}
  data-part="shortcut"
  data-scope="menu"
>
  {@render children?.()}
</Ark>
