<script lang="ts">
  import {
    TagsInput as TagsInputPrimitive,
    type TagsInputItemDeleteTriggerProps,
  } from "@ark-ui/svelte";
  import { buttonRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import { XIcon } from "phosphor-svelte";
  import { useLocale } from "../provider/context";
  import { useTagsInputItem } from "./tags-input.context";

  const { m } = useLocale();

  let {
    class: className,
    children,
    ...rest
  }: TagsInputItemDeleteTriggerProps = $props();
  const styles = useTagsInputItem();
  const slots = $derived(styles.slots);
</script>

<TagsInputPrimitive.ItemDeleteTrigger
  aria-label={m("tagsInput.removeTag")}
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
