<script lang="ts">
import {
  type TagsInputItemDeleteTriggerProps,
  TagsInput as TagsInputPrimitive,
} from "@ark-ui/svelte/tags-input";
import { buttonRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import XIcon from "phosphor-svelte/lib/XIcon";
import { useMessageResolver } from "../provider/context";
import { useTagsInputItem } from "./tags-input.context";

const t = useMessageResolver();

let {
  class: className,
  children,
  ...rest
}: TagsInputItemDeleteTriggerProps = $props();
const styles = useTagsInputItem();
const slots = $derived(styles.slots);
</script>

<TagsInputPrimitive.ItemDeleteTrigger
  aria-label={t("tagsInput.removeTag")}
  {...rest}
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
