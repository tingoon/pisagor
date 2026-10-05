<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";
import { useAnnouncement } from "./announcement.context";

type Props = HTMLAttributes<HTMLSpanElement> & {
  children?: import("svelte").Snippet;
};

let { children, class: className, ...rest }: Props = $props();

const { slots } = useAnnouncement();
</script>

<Ark
  as="span"
  {...rest}
  class={slots.title({ class: cn(className) })}
  data-part="title"
  data-scope="announcement"
>
  {@render children?.()}
</Ark>
