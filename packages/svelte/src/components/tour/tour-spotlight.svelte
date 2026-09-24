<script lang="ts">
import { Portal } from "@ark-ui/svelte/portal";
import { Tour as TourPrimitive } from "@ark-ui/svelte/tour";
import { cn } from "@pisagor/utils";
import { useTourContext } from "./tour.context";

type Props = { class?: string | undefined };
let { class: className }: Props = $props();
const { slots } = useTourContext();
</script>

<Portal>
  <TourPrimitive.Spotlight class={slots.spotlight({ class: cn(className) })} />
</Portal>
