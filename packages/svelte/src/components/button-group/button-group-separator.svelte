<script lang="ts">
import { cn } from "@pisagor/utils";
import type { ClassValue } from "svelte/elements";
import Separator from "../separator/separator.svelte";
import { useButtonGroup } from "./button-group.context";

type Props = {
  class?: ClassValue;
  orientation?: "horizontal" | "vertical";
};

let { orientation = "vertical", class: className, ...rest }: Props = $props();

const { slots } = useButtonGroup();
</script>

<Separator
  {...rest}
  class={slots.separator({ class: cn(className) })}
  data-part="separator"
  data-scope="button-group"
  {orientation}
/>
