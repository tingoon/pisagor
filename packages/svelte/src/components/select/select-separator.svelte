<script lang="ts">
import { selectRecipe } from "@pisagor/recipes";
import type { ComponentProps } from "svelte";
import Separator from "../separator/separator.svelte";
import { useSelectRoot } from "./select.context";

type Props = ComponentProps<typeof Separator>;

let { class: className, ...rest }: Props = $props();
const ctx = useSelectRoot();
const slots = $derived(ctx?.slots ?? selectRecipe());
</script>

<Separator
  {...rest}
  class={slots.separator({ class: className })}
  data-part="separator"
  data-scope="select"
/>
