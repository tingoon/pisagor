<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { HTMLAttributes } from "svelte/elements";
import { useAnnouncement } from "./announcement.context";

type Props = Omit<HTMLAttributes<HTMLSpanElement>, "class"> & {
  children?: import("svelte").Snippet;
  class?: string | undefined;
};

let { children, class: className, ...rest }: Props = $props();

const { slots } = useAnnouncement();
</script>

<Ark
  as="span"
  {...rest}
  class={slots.title({ class: className })}
  data-part="title"
  data-scope="announcement"
>
  {@render children?.()}
</Ark>
