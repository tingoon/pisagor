<script lang="ts">
import {
  type TagsInputItemInputProps,
  TagsInput as TagsInputPrimitive,
} from "@ark-ui/svelte/tags-input";
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
