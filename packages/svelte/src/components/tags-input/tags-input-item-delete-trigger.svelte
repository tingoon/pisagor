<script lang="ts">
import {
  type TagsInputItemDeleteTriggerProps,
  TagsInput as TagsInputPrimitive,
} from "@ark-ui/svelte/tags-input";
import { buttonRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import XIcon from "phosphor-svelte/lib/XIcon";
import { useTagsInputItem } from "./tags-input.context";

let {
  class: className,
  children,
  ...rest
}: TagsInputItemDeleteTriggerProps = $props();
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
