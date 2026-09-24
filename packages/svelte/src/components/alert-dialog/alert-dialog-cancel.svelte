<script lang="ts">
import { buttonRecipe } from "@pisagor/recipes/button";
import { cn } from "@pisagor/utils";
import type { Snippet } from "svelte";
import DialogCloseTrigger from "../dialog/dialog-close-trigger.svelte";

type Props = {
  children?: Snippet;
  class?: string | undefined;
};

let { children, class: className }: Props = $props();
</script>

<DialogCloseTrigger
  class={cn(buttonRecipe({ variant: "outline" }).base(), className)}
  type="button"
>
  {@render children?.()}
</DialogCloseTrigger>
