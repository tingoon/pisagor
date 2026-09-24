<script lang="ts">
import { Tour as TourPrimitive } from "@ark-ui/svelte/tour";
import { cn } from "@pisagor/utils";
import { useTourContext } from "./tour.context";

type Props = {
  class?: string | undefined;
  children?: import("svelte").Snippet;
  [key: string]: unknown;
};
let { class: className, children, ...rest }: Props = $props();
const { slots } = useTourContext();
</script>

<TourPrimitive.Title {...rest} class={slots.title({ class: cn(className) })}>
  {@render children?.()}
</TourPrimitive.Title>
