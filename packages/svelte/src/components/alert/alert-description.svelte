<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";
import { useAlert } from "./alert.context";

type Props = Omit<HTMLAttributes<HTMLDivElement>, "class"> & {
  children?: import("svelte").Snippet;
  class?: string | undefined;
};

let { children, class: className, ...rest }: Props = $props();

const { slots } = useAlert();
</script>

<Ark
  as="div"
  {...rest}
  class={slots.description({ class: cn(className) })}
  data-part="description"
  data-scope="alert"
>
  {@render children?.()}
</Ark>
