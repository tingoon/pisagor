<script lang="ts">
import type { TagsInputClearTriggerProps } from "@ark-ui/svelte/tags-input";
import { TagsInput as TagsInputPrimitive } from "@ark-ui/svelte/tags-input";
import { buttonRecipe } from "@pisagor/recipes/button";
import { cn } from "@pisagor/utils";
import XIcon from "phosphor-svelte/lib/XIcon";
import { useTagsInput } from "./tags-input.context";

type Props = Omit<TagsInputClearTriggerProps, "class"> & { class?: string | undefined };

let { class: className, children, ...rest }: Props = $props();
const { slots } = useTagsInput();
</script>

<TagsInputPrimitive.ClearTrigger
  {...rest}
  aria-label="Clear"
  class={cn(
  buttonRecipe({ size: "icon-xs", variant: "ghost" }).base(),
  slots.clearTrigger({ class: cn(className) }),
)}
  type="button"
>
  {#if children}
    {@render children()}
  {:else}
    <XIcon aria-hidden="true" />
  {/if}
</TagsInputPrimitive.ClearTrigger>
