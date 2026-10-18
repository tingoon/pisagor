<script lang="ts">
  import {
    TagsInput as TagsInputPrimitive,
    type TagsInputItemTextProps,
  } from "@ark-ui/svelte";
  import { cn } from "@pisagor/utils";
  import { useTagsInputItem } from "./tags-input.context";

  let {
    class: className,
    children,
    ...rest
  }: TagsInputItemTextProps = $props();
  const styles = useTagsInputItem();
  const slots = $derived(styles.slots);
</script>

<TagsInputPrimitive.ItemText
  {...rest}
  class={slots.text({ class: cn(className) })}
>
  {@render children?.()}
</TagsInputPrimitive.ItemText>
