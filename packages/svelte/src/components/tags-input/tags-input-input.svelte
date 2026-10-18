<script lang="ts">
  import {
    TagsInput as TagsInputPrimitive,
    type TagsInputInputProps,
  } from "@ark-ui/svelte";
  import { cn } from "@pisagor/utils";
  import { useTagsInput } from "./tags-input.context";

  let { class: className, ...rest }: TagsInputInputProps = $props();
  const styles = useTagsInput();
  const slots = $derived(styles.slots);
</script>

<TagsInputPrimitive.Input
  {...rest}
  class={slots.input({ class: cn(className) })}
/>
