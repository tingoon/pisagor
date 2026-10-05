<script lang="ts">
import type {
  TourRootProps as ArkRootProps,
  TourStepDetails,
  UseTourProps,
} from "@ark-ui/svelte/tour";
import { Tour as TourPrimitive, useTour } from "@ark-ui/svelte/tour";
import type { TourProps as BaseTourProps } from "@pisagor/props";
import { tourRecipe } from "@pisagor/recipes";
import { onDestroy } from "svelte";
import { setTourContext } from "./tour.context";

type Props = Omit<ArkRootProps, "tour"> &
  Pick<
    UseTourProps,
    "keyboardNavigation" | "onStatusChange" | "onStepChange"
  > & {
    steps?: TourStepDetails[];
  } & BaseTourProps;

let {
  steps = [],
  keyboardNavigation,
  onStatusChange,
  onStepChange,
  recipe = tourRecipe,
  children,
  ...rest
}: Props = $props();

const tour = useTour(() => ({
  keyboardNavigation,
  onStatusChange,
  onStepChange,
  steps,
}));
const slots = $derived(recipe());
let isStarted = $state(false);

function handleStart() {
  isStarted = true;
  tour().start();
}

$effect(() => {
  if (isStarted) document.body.classList.add("relative");
  else document.body.classList.remove("relative");
});

onDestroy(() => document.body.classList.remove("relative"));

setTourContext({
  handleStart,
  get slots() {
    return slots;
  },
  get tour() {
    return tour;
  },
});
</script>

<TourPrimitive.Root {...rest} {tour}>
  {@render children?.()}
</TourPrimitive.Root>
