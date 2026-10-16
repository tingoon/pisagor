<script lang="ts">
import {
  type SelectClearTriggerProps,
  Select as SelectPrimitive,
} from "@ark-ui/svelte/select";
import { selectRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import { useMessageResolver } from "../provider/context";
import { useSelectRoot } from "./select.context";

const t = useMessageResolver();

let { class: className, children, ...rest }: SelectClearTriggerProps = $props();
const ctx = useSelectRoot();
const slots = $derived(ctx?.slots ?? selectRecipe());
</script>

<SelectPrimitive.ClearTrigger
  aria-label={t("select.clear")}
  {...rest}
  class={slots.clearTrigger({ class: cn(className) })}
>
  {@render children?.()}
</SelectPrimitive.ClearTrigger>
