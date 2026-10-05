<script lang="ts">
import { buttonRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import type { Snippet } from "svelte";
import type { ClassValue } from "svelte/elements";
import DialogCloseTrigger from "../dialog/dialog-close-trigger.svelte";

type Props = {
  class?: ClassValue;
  children?: Snippet;
};

let { children, class: className }: Props = $props();
</script>

<DialogCloseTrigger
  class={cn(buttonRecipe({ variant: "outline" }).base(), className)}
  type="button"
>
  {@render children?.()}
</DialogCloseTrigger>
