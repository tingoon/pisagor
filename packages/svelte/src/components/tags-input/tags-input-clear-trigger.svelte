<script lang="ts">
import {
  type TagsInputClearTriggerProps,
  TagsInput as TagsInputPrimitive,
} from "@ark-ui/svelte/tags-input";
import { buttonRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import XIcon from "phosphor-svelte/lib/XIcon";
import { useMessageResolver } from "../provider/context";
import { useTagsInput } from "./tags-input.context";

const t = useMessageResolver();

let {
  class: className,
  children,
  ...rest
}: TagsInputClearTriggerProps = $props();
const styles = useTagsInput();
const slots = $derived(styles.slots);
</script>

<TagsInputPrimitive.ClearTrigger
  aria-label={t("tagsInput.clear")}
  {...rest}
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
