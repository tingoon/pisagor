<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { cn } from "@pisagor/utils";
import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
import { useCommand } from "./command.context";

type Props = Omit<HTMLAttributes<HTMLDivElement>, "class"> & {
  children?: Snippet;
  class?: string | undefined;
};

let { class: className, children, ...rest }: Props = $props();
const { slots } = useCommand();
</script>

<Ark
  as="div"
  {...rest}
  class={slots.footer({ class: cn(className) })}
  data-part="footer"
  data-scope="command"
>
  {@render children?.()}
</Ark>
