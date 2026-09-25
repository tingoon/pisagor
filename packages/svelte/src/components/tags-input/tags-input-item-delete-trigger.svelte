<script lang="ts">
import type { TagsInputItemDeleteTriggerProps } from "@ark-ui/svelte/tags-input";
import { TagsInput as TagsInputPrimitive } from "@ark-ui/svelte/tags-input";
import { buttonRecipe } from "@pisagor/recipes/button";
import { cn } from "@pisagor/utils";
import XIcon from "phosphor-svelte/lib/XIcon";
import { useTagsInputItem } from "./tags-input.context";

type Props = Omit<TagsInputItemDeleteTriggerProps, "class"> & { class?: string | undefined };

let { class: className, children, ...rest }: Props = $props();
const { slots } = useTagsInputItem();
</script>

<TagsInputPrimitive.ItemDeleteTrigger
  {...rest}
  aria-label="Remove tag"
  class={cn(
  buttonRecipe({ size: "icon-xs", variant: "ghost" }).base(),
  slots.delete({ class: cn(className) }),
)}
  type="button"
>
  {#if children}
    {@render children()}
  {:else}
    <XIcon aria-hidden="true" />
  {/if}
</TagsInputPrimitive.ItemDeleteTrigger>
