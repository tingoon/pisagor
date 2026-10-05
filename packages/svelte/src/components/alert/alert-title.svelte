<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";
import { useAlert } from "./alert.context";

type Props = HTMLAttributes<HTMLDivElement> & {
  children?: import("svelte").Snippet;
};

let { children, class: className, ...rest }: Props = $props();

const { slots } = useAlert();
</script>

<Ark
  as="div"
  {...rest}
  class={slots.title({ class: cn(className) })}
  data-part="title"
  data-scope="alert"
>
  {@render children?.()}
</Ark>
