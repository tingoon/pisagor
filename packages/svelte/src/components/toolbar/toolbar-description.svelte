<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";
import { useToolbar } from "./toolbar.context";

type Props = Omit<HTMLAttributes<HTMLElement>, "class"> & { class?: string | undefined };
let { class: className, children, ...rest }: Props = $props();
const { slots } = useToolbar();
</script>

<Ark
  as="p"
  {...rest}
  class={slots.description({ class: cn(className) })}
  data-part="description"
  data-scope="toolbar"
>
  {@render children?.()}
</Ark>
