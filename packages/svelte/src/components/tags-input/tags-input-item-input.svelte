<script lang="ts">
  import {
    TagsInput as TagsInputPrimitive,
    type TagsInputItemInputProps,
  } from "@ark-ui/svelte";
  import { cn } from "@pisagor/utils";
  import { useTagsInputItem } from "./tags-input.context";

  let { class: className, ...rest }: TagsInputItemInputProps = $props();
  const styles = useTagsInputItem();
  const slots = $derived(styles.slots);
</script>

<TagsInputPrimitive.ItemInput
  {...rest}
  class={slots.input({ class: cn(className) })}
/>
