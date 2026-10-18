<script lang="ts">
  import { buttonRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import type { Snippet } from "svelte";
  import type { ClassValue } from "svelte/elements";
  import AlertDialogCloseTrigger from "./alert-dialog-close-trigger.svelte";

  type Props = {
    class?: ClassValue;
    children?: Snippet;
  };

  let { children, class: className }: Props = $props();
</script>

<AlertDialogCloseTrigger
  class={cn(buttonRecipe({ variant: "outline" }).base(), className)}
  type="button"
>
  {@render children?.()}
</AlertDialogCloseTrigger>
